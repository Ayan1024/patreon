'use client';


import React from "react";
import { Input, Button , Typography } from "@material-tailwind/react";
import { useSession, signIn, signOut } from "next-auth/react";

function page() {
  return (
    <div className="text-white py-14 container mx-auto ">
      <h1 className="font-bold text-center text-2xl">
        Login to Get your fan support you
      </h1>

      <div className="social-login-buttons flex flex-col gap-5 justify-center items-center mt-10">
        <div className="grid grid-cols-1 gap-2">
          <Button 
            onClick={() => signIn("google")}
            variant="outlined"
            fullWidth
              className="flex items-center justify-center gap-2 bg-zinc-700  cursor-pointer hover:bg-zinc-800 p-5"
          >
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="Google"
              className="h-5 w-5"
            />
            Sign in with Google
          </Button >

          <Button 
            variant="outlined"
            fullWidth
            className= "bg-zinc-700  cursor-pointer hover:bg-zinc-800 p-5 flex items-center justify-center gap-2"
            onClick={() => signIn("github")}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="h-5 w-5"
            />
            Sign in with GitHub
          </Button >

          <Button 
            variant="outlined"
            fullWidth
            className=" bg-zinc-700  cursor-pointer hover:bg-zinc-800 p-5 flex items-center justify-center gap-2"
            onClick={() => signIn("linkedin")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="h-5 w-5"
            />
            Sign in with LinkedIn
          </Button >

          <Button 
            variant="outlined"
            fullWidth
            className=" bg-zinc-700  cursor-pointer hover:bg-zinc-800 p-5 flex items-center justify-center gap-2"
            onClick={() => signIn("twitter")}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
              alt="Twitter X"
              className="h-5 w-5"
            />
            Sign in with X (Twitter)
          </Button >
        </div>
      </div>
    </div>
  );
}

export default page;
