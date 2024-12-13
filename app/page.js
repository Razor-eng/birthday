"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Lottie from "react-lottie";

import pleaseAnimation from "../public/please.json"; // Please animation

const HomePage = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      router.push(`/wish/${name}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 text-white w-screen overflow-hidden">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Can you please enter your real name now?</h1>
        <Lottie
          options={{
            animationData: pleaseAnimation,
            loop: true,
            autoplay: true,
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
          }}
          height={150}
          width={150}
        />
        <form onSubmit={handleSubmit} className="mt-6 px-10 flex gap-4 w-full items-center justify-center">
          <input
            type="text"
            className="px-4 py-2 rounded-lg text-black w-full md:w-64 focus:ring-2 focus:ring-[#F4C2C2] focus:outline-[#F4C2C2]"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#F4C2C2] text-black font-semibold rounded-md shadow-lg hover:bg-[#F4C2f5] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
