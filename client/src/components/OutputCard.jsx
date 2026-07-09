import { Copy } from "lucide-react";
import { motion } from "framer-motion";

const OutputCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Enhanced Prompt</h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          <Copy size={18} />
          Copy
        </motion.button>
      </div>

      <div className="bg-slate-900 rounded-xl p-5 border border-gray-700">
        <p className="text-gray-300 leading-8">
          Your enhanced prompt will appear here...
        </p>
      </div>
    </motion.div>
  );
};

export default OutputCard;
