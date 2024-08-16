'use client';
import { Input, Button, Spacer } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import React, { useState, FormEvent } from 'react';

export default function SignUp() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="max-w-sm text-center">
        <h1 className={title({ size: "lg" })}>Sign Up</h1>
        <h2 className="font-normal text-gray-500 py-2">
          Create a new account to get started
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
          value={password}
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          aria-label="Password"
          type="password"
        />
        <Spacer y={1} />
        <Button
          className="w-full"
          color="primary"
          size="lg"
          aria-label="Sign Up"
        >
          Sign Up
        </Button>
        <div className="text-center text-sm mt-4">
          <span>Already have an account?</span> <a href="#" className="text-primary hover:underline">Login</a>
        </div>
      </div>
    </section>
  );
}
