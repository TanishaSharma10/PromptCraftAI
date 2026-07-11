import { useState } from "react";
import Hero from "../components/Hero";
import PromptForm from "../components/PromptForm";
import OutputCard from "../components/OutputCard";
import { motion } from "framer-motion";

const Home = () => {
  const [enhancedPrompt, setEnhancedPrompt] = useState("");
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[160px] opacity-20 -top-20 -left-20"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-20 bottom-0 right-0"
      />

      <div className="relative z-10 flex justify-center px-6 py-20">
        <div className="w-full max-w-5xl">
          <Hero />

          <PromptForm setEnhancedPrompt={setEnhancedPrompt} />

          <OutputCard enhancedPrompt={enhancedPrompt} />
        </div>
      </div>
    </div>
  );
};

export default Home;
