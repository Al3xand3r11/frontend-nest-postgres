"use client";

import Link from "next/link";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SigninForm() {

  const router = useRouter();  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const testUser = {
    email: "test@gmail.com",
    password: "test1234",
    };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (email === testUser.email && password === testUser.password) {
        console.log("Test user:" + testUser.email);
        console.log("Test input:" + email);
        setValid(true);
        router.push(`/preferences/?user=${email}`);
        
  }
    else {
        console.log("Test user:" + testUser.email);
        console.log("Test input:" + email);
        alert("Invalid email or password");
    }

    };

  return (
    <div className="w-full max-w-md">
      <form>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                placeholder="username or email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="w-full" onClick={handleSubmit}>Sign In</button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link className="underline ml-2" href="signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}