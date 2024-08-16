// "use client";

// import { useChat } from "ai/react";
// import { useRouter } from "next/navigation";

// export default function Chatbot() {

//   const Router = useRouter();

//   const {isLoading, messages, input, handleInputChange, handleSubmit} =
//     useChat();

//   const noMessages = !messages || messages.length === 0;

//   return (
//     <main>
//       <div className="absolute px-4 w-full h-screen flex flex-col gap-5 items-center bottom-5">
//         <h1 className="text-4xl font-Kanit md:text-5xl font-bold text-white mt-10">
//           AI Chatbot
//         </h1>

//         <section className="w-full flex-1 flex flex-col overflow-y-scroll">
//           {noMessages ? (
//             <p className="text-center text-xl">Ask me Anything</p>
//           ) : (
//             <>
//               {messages.map((message, index) => {
//                 return (
//                   <div
//                     className={`rounded-3xl ${
//                       message.role === "user"
//                         ? "rounded-br-none bg-blue-500 ml-auto"
//                         : "rounded-bl-none bg-orange-700"
//                     } m-2 p-2 px-4 w-[70%] md:w-[80%] mt-4 text-gray-200`}
//                     key={`message-${index}`}
//                   >
//                     <b>{message.role === "user" ? "User:" : "CampusConnect:"}</b>{" "}
//                     {message.content}
//                   </div>
//                 );
//               })}

//               {isLoading && <span className="ml-auto">Thinking... 🤔</span>}
//             </>
//           )}
//         </section>

//         <form
//           className="w-full flex gap-2"
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleSubmit(e);
//           }}
//         >
//           <input
//             onChange={handleInputChange}
//             value={input}
//             type="text"
//             placeholder="What the admission date?"
//             className="py-3 px-5 flex-1 rounded text-black text-2xl border-2 border-gray-50 focus:outline-none focus:border-blue-500"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white rounded text-xl  px-5 cursor-pointer focus:outline-none disabled:bg-blue-400"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }
// "use client";

// import { useChat } from "ai/react";
// import { useRouter } from "next/navigation";
// import { button as buttonStyles } from "@nextui-org/theme";

// export default function Chatbot() {
//   const Router = useRouter();
//   const { isLoading, messages, input, handleInputChange, handleSubmit } = useChat();

//   const noMessages = !messages || messages.length === 0;

//   return (
//     <main>
//       <div className="absolute px-4 w-full h-screen flex flex-col gap-6 items-center justify-center bg-gradient-to-b from-indigo-900 to-gray-900">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mt-10 drop-shadow-lg">
//           AI Chatbot
//         </h1>

//         <section className="w-full flex-1 flex flex-col overflow-y-scroll mt-5 max-w-2xl mx-auto space-y-4 p-4 bg-gray-800 bg-opacity-30 rounded-lg shadow-lg">
//           {noMessages ? (
//             <p className="text-center text-2xl text-gray-300 italic">Ask me anything, I’m here to help!</p>
//           ) : (
//             <>
//               {messages.map((message, index) => (
//                 <div
//                   className={`rounded-3xl p-4 ${
//                     message.role === "user"
//                       ? "rounded-br-none bg-blue-500 ml-auto text-right shadow-sm"
//                       : "rounded-bl-none bg-orange-600 text-left shadow-sm"
//                   } w-[70%] md:w-[80%] text-white`}
//                   key={`message-${index}`}
//                 >
//                   <b>{message.role === "user" ? "You:" : "CampusConnect:"}</b> {message.content}
//                 </div>
//               ))}
//               {isLoading && (
//                 <div className="text-center text-white animate-pulse">Thinking... 🤔</div>
//               )}
//             </>
//           )}
//         </section>

//         <form
//           className="w-full flex gap-3 max-w-2xl mx-auto mt-5"
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleSubmit(e);
//           }}
//         >
//           <input
//             onChange={handleInputChange}
//             value={input}
//             type="text"
//             placeholder="Type your question..."
//             className="py-3 px-5 flex-1 rounded-full text-dark dark:text-white text-xl border-2 border-gray-50 focus:outline-none focus:border-blue-500 shadow-inner"
//           />
//           <button
//             type="submit"
//             className={buttonStyles({
//               color: "primary",
//               radius: "full",
//               variant: "shadow",
//               size: "lg",
//             })}
//             disabled={isLoading}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }
"use client";

import { useChat } from "ai/react";
import { useRouter } from "next/navigation";
import { button as buttonStyles } from "@nextui-org/theme";
import { useState, FormEvent, ChangeEvent } from "react";

export default function Chatbot() {
  
  const Router = useRouter();

  const { isLoading, messages, input, handleInputChange, handleSubmit } = useChat();
  const [selectedFaq, setSelectedFaq] = useState<string>("");

  const noMessages = !messages || messages.length === 0;

  const faqs: string[] = [
    "What is the admission process?",
    "What are the eligibility criteria for Bachelor of Engineering?",
    "How can I apply for a Polytechnic Diploma?",
    "What is the last date to apply?",
    "What are the available branches in engineering?",
  ];

  const handleFaqClick = (faq: string) => {
    setSelectedFaq(faq);
    handleInputChange({ target: { value: faq } } as ChangeEvent<HTMLInputElement>);
    handleSubmit({ preventDefault: () => {} } as FormEvent<HTMLFormElement>);
  };

  return (
    <main>
      <div className="absolute px-4 w-full h-screen flex flex-col gap-6 items-center justify-center bg-gradient-to-b from-indigo-900 to-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-10 drop-shadow-lg">
          Campus Connect
        </h1>

        <section className="w-full flex-1 flex flex-col overflow-y-scroll mt-5 max-w-2xl mx-auto space-y-4 p-4 bg-gray-800 bg-opacity-30 rounded-lg shadow-lg">
          {noMessages ? (
            <>
              <p className="text-center text-2xl text-gray-300 italic">
                Ask me anything, I’m here to help!
              </p>
              <div className="mt-6 space-y-3">
                <h2 className="text-xl text-gray-400">Frequently Asked Questions:</h2>
                <ul className="space-y-2">
                  {faqs.map((faq, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleFaqClick(faq)}
                        className="text-blue-400 hover:underline text-left w-full"
                      >
                        {faq}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              {messages.map((message, index) => (
                <div
                  className={`rounded-3xl p-4 ${
                    message.role === "user"
                      ? "rounded-br-none bg-blue-500 ml-auto text-right shadow-sm"
                      : "rounded-bl-none bg-orange-600 text-left shadow-sm"
                  } w-[70%] md:w-[80%] text-white`}
                  key={`message-${index}`}
                >
                  <b>{message.role === "user" ? "You:" : "CampusConnect:"}</b> {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="text-center text-white animate-pulse">Thinking... 🤔</div>
              )}
            </>
          )}
        </section>

        <form
          className="w-full flex gap-3 max-w-2xl mx-auto mt-5"
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <input
            onChange={handleInputChange}
            value={input || selectedFaq}
            type="text"
            placeholder="Type your question..."
            className="py-3 px-5 flex-1 rounded-full text-dark dark:text-white text-xl border-2 border-gray-50 focus:outline-none focus:border-blue-500 shadow-inner"
          />
          <button
            type="submit"
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "lg",
            })}
            disabled={isLoading}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
