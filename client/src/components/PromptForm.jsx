import { useState } from "react";
import { motion } from "framer-motion";

const modes = ["Professional", "Coding", "Creative", "Marketing", "Learning"];

const PromptForm = ({ setEnhancedPrompt }) => {
  const [prompt, setPrompt] = useState("");
  const [selectedMode, setSelectedMode] = useState("Professional");
  const [loading, setLoading] = useState(false);

  const handleEnhance = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/enhance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      setEnhancedPrompt(data.enhancedPrompt);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
    >
      <h2 className="text-2xl font-semibold mb-5">Enter Your Prompt</h2>

      <textarea
        rows="6"
        placeholder="Describe what you want AI to help you with..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full rounded-xl bg-slate-900 border border-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
      />

      <div className="flex justify-between items-center mt-3">
        <div className="mt-6">
          <h3 className="text-gray-300 font-medium mb-3">Enhancement Mode</h3>

          <div className="flex flex-wrap gap-3">
            {modes.map((mode) => (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                  selectedMode === mode
                    ? "bg-purple-600 border-purple-500"
                    : "bg-slate-900 border-gray-700 hover:border-purple-400"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <p className="text-gray-400 text-sm">{prompt.length} characters</p>

        <p className="text-gray-400 text-sm">Max 1000</p>
      </div>

      <button
        onClick={handleEnhance}
        disabled={loading}
        className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition duration-300"
      >
        {loading ? "⏳ Enhancing..." : "✨ Enhance Prompt"}
      </button>
    </motion.div>
  );
};

export default PromptForm;
