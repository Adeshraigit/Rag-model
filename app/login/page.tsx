'use client';
import { Input, Button, Spacer } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="max-w-sm text-center">
        <h1 className={title({ size: "lg" })}>Login</h1>
        <h2 className="font-normal text-gray-500 py-2">
          Enter your credentials to access your account
        </h2>
      </div>

      <div className="flex flex-col gap-4 max-w-sm w-full px-4">
        <Input
          clearable
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          aria-label="Email"
        />
        <Input
          clearable
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          aria-label="Password"
        />
        <Spacer y={1} />
        <Button
          className="w-full"
          color="primary"
          size="lg"
          aria-label="Login"
        >
          Login
        </Button>
        <div className="text-center text-sm mt-4">
          <a href="#" className="text-primary hover:underline">
            Forgot your password?
          </a>
        </div>
        <div className="text-center text-sm mt-2">
          <span>Don't have an account?</span> <a href="/signup" className="text-primary hover:underline">Sign Up</a>
        </div>
      </div>
    </section>
  );
}
