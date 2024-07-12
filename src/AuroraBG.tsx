"use client";
import React, { useState } from "react";
// import { BackgroundBeams } from "./components/ui/background-beams";
// import { Button } from "./components/ui/moving-border";
import VideoBackground from "./components/ui/videoBackground";
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function BackgroundBeamsDemo() {
  const [email, setEmail] = useState<string>('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast("Thanks, we'll get in touch soon.", {
      type: 'success',
      position: 'bottom-center'
    })
    setEmail('');
    await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSd88OTSfMhwOn3PaVRFVLVqI2J_FeZ0W5ZyVco5Pf2ULlPwaw/formResponse?entry.1161415504=${email}`);
    console.log("Email from handleSubmit ", email);


    // if(!response.ok) {
    //   throw new Error('Form could not be submitted.')
    // }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  return (
    <div className="relative w-full h-screen">
      <ToastContainer />
      <VideoBackground/>
      <div className="h-dvh w-full rounded-md px-4 bg-transparent relative flex flex-col items-center justify-center">
        {/* <header className="absolute inset-x-0 top-0 z-[1000] bg-transparent ">
          <nav aria-label="Global" className="flex items-center justify-between bg-transparent p-6 lg:px-8">
            <div className="flex lg:flex-1 bg-transparent">
              <a href="#" className="-m-1.5 p-1.5 bg-transparent">
                <span className="sr-only">VectorX</span>
                <img
                  alt=""
                  src="../public/vectorX.svg"
                  className="object-cover h-10 md:h-12 w-40 md:w-48 bg-transparent"
                />
              </a>
            </div>
          </nav>
        </header> */}
        
        <div className="max-w-full mx-auto flex flex-col items-center justify-evenly">
        {/* <VideoBackground /> */}
          <div className="flex">
            <h1 className="text-7xl bg-clip-text text-primaryBlue text-center font-sans font-bold mb-8">Vector</h1>
            <h1 className="text-7xl bg-clip-text text-primaryOrange text-center font-sans font-bold mb-8">X</h1>
          </div>
          {/* <img src="../public/vectorX (1).svg" className=""/> */}
          <div className="md:flex">
            <h1 className="relative max-w-full z-10 text-4xl md:text-4xl pr-1 bg-clip-text text-slate-900 bg-gradient-to-b from-primaryBlue to-neutral-200  text-center font-roboto font-bold">
              World's Most Secure Vector Database
            </h1>
          </div>
          <p className="text-slate-800 max-w-lg mx-auto my-8 px-2 text-md text-center font-semibold relative z-10">
            50-70% of text data can be recovered by Vector Inversion Attacks.
            100% of photos can be recovered as well.
            VectorX addresses that by encypting your vector data.
          </p>
          {/* <p className="text-slate-600 font-semibold max-w-lg mx-auto my-8 px-2 text-sm text-center relative z-10">
            100% of photos can be recovered as well.
          </p>
          <p className="text-slate-600 font-semibold max-w-lg mx-auto my-8 px-2 text-sm text-center relative z-10">
            VectorX addresses that by encypting your vector data.
          </p> */}
          <div className="md:w-3/4 flex flex-col bg-transparent items-center justify-center gap-x-3 rounded-md overflow-visible">
            {/* <h4 className="text-sm text-slate-500 py-2">Join the Waitlist</h4> */}
            <form className="w-full flex  flex-col justify-center items-center gap-y-3"
              onSubmit={handleSubmit}
            >
              {/* <label htmlFor="email-address" className="sr-only bg-transparent">
                Email address
              </label> */}
              <input
                type="email"
                value={email}
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 w-full lg:w-1/2 flex-auto rounded-md border text-primaryOrange border-solid border-slate-700 bg-[#dcdcdc]/20 px-3.5 py-2 text-slate-900 shadow-sm sm:text-sm sm:leading-6 active:border-primaryOrange  focus:ring-0 focus:border-primaryOrange "
                onChange={handleChange}
              />
              <button
                type='submit'
                className="bg-primaryOrange flex-auto w-full lg:w-1/2 px-3.5 py-2 border border-solid border-primaryOrange rounded-md text-lg  sm:leading-6 text-white shadow-sm hover:bg-white hover:text-primaryOrange hover:border-primaryOrange hover:shadow-md"
              >
                Get an invite
              </button>
            </form>
          </div>
        </div>
        {/* <BackgroundBeams className="-z-10" /> */}

      </div>
    </div>
  );
}
