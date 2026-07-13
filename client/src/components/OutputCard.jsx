import { Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const OutputCard = ({
  enhancedPrompt,
  history,
  clearHistory,
  setEnhancedPrompt,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!enhancedPrompt) return;

    try {
      await navigator.clipboard.writeText(enhancedPrompt);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearHistory = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear all prompt history?"
    );

    if (confirmDelete) {
      clearHistory();
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Enhanced Prompt
          </h2>

          <motion.button
            onClick={handleCopy}
            disabled={!enhancedPrompt}
            whileHover={{
              scale: enhancedPrompt ? 1.05 : 1,
            }}
            whileTap={{
              scale: enhancedPrompt ? 0.96 : 1,
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              enhancedPrompt
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            <Copy size={18} />
            {copied ? "Copied!" : "Copy"}
          </motion.button>
        </div>

        <div className="bg-slate-900 rounded-xl p-5 border border-gray-700 min-h-[150px]">
          <p className="text-gray-300 leading-8 whitespace-pre-wrap">
            {enhancedPrompt ||
              "Your enhanced prompt will appear here..."}
          </p>
        </div>
      </motion.div>

      {/* Prompt History */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">
            Prompt History
          </h2>

          <button
            onClick={handleClearHistory}
            disabled={history.length === 0}
            className={`px-4 py-2 rounded-lg transition ${
              history.length
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Clear History
          </button>
        </div>

        {history.length === 0 ? (
          <p className="text-gray-400">
            No prompt history yet.
          </p>
        ) : (
          <div className="space-y-3">
            {history.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setEnhancedPrompt(item)}
                className="bg-slate-900 border border-gray-700 rounded-xl p-4 cursor-pointer hover:border-purple-500 transition"
              >
                <p className="text-gray-300 line-clamp-2">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default OutputCard;