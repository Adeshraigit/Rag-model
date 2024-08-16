import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import {DataAPIClient} from "@datastax/astra-db-ts";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
  namespace: process.env.ASTRA_DB_NAMESPACE,
});

export async function POST(req) {
  try {
    const {messages} = await req.json();

    const latestMessage = messages[messages?.length - 1]?.content;
    let docContext = "";

    const {data} = await openai.embeddings.create({
      input: latestMessage,
      model: "text-embedding-3-small",
    });

    const collection = await db.collection("chatbot");

    const cursor = collection.find(null, {
      sort: {
        $vector: data[0]?.embedding,
      },
      limit: 5,
    });

    const documents = await cursor.toArray();

    docContext = `
          START CONTEXT
          ${documents?.map((doc) => doc.description).join("\n")}
          END CONTEXT
          `;

    const ragPrompt = [
      {
        role: "system",
        content: `
        You are an AI assistant specialized in answering questions related to admissions in Bachelor of Engineering and Polytechnic Diploma programs. Utilize the provided context to give accurate and helpful responses to the user's queries.

        If the information is not available in the provided context, kindly guide the user by saying, 'I'm sorry, but I don't have that information at the moment. Please contact us via email for further assistance.'

        Your goal is to be informative, polite, and helpful, ensuring a smooth and user-friendly experience for those seeking admission-related information.
         ${docContext}

        Don't add any real time data use the data in the context provided.
         `,
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [...ragPrompt, ...messages],
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (e) {
    throw e;
  }
}