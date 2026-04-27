"use client"

import Form from "@/app/components/ui/Form";
import PrimaryButton from "@/app/components/ui/PrimaryButton";
import PrimaryInput from "@/app/components/ui/PrimaryInput";


export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-sm text-gray-500 mb-6">
        Login to access your Campusory account
      </p>

      <div className="flex flex-col gap-4">
        <PrimaryInput label="Email" placeholder="john.doe@gmail.com" />
        <PrimaryInput label="Password" type="password" placeholder="********" />

        <div className="flex justify-between items-center">
          <a href="#" className="text-red-500 text-sm">
            Forgot Password
          </a>
        </div>

        <PrimaryButton text="Login" />
      </div>
    </Form>
  );
}