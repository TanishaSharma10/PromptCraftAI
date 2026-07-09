import { useState } from "react";

const modes = ["Professional", "Coding", "Creative", "Marketing", "Learning"];

const PromptForm = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedMode, setSelectedMode] = useState("Professional");
  const [loading, setLoading] = useState(false);

  const handleEnhance = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
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
    </div>
  );
};

export default PromptForm;
