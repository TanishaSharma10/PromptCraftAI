import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-12"
    >
    
      <motion.h1
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-500 via-pink-500 to-violet-400 bg-clip-text text-transparent pb-3">
        PromptCraft AI
      </motion.h1>

      <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
        Transform ordinary prompts into powerful AI prompts that generate better
        responses from ChatGPT, Gemini, Claude and other LLMs.
      </p>
    </motion.div>
  );
};

export default Hero;
