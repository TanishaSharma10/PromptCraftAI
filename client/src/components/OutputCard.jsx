import { Copy } from "lucide-react";

const OutputCard = () => {
  return (
    <div className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-semibold">
          Enhanced Prompt
        </h2>

        <button className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition">

          <Copy size={18} />

          Copy

        </button>

      </div>

      <div className="bg-slate-900 rounded-xl p-5 border border-gray-700">

        <p className="text-gray-300 leading-8">

          Your enhanced prompt will appear here...

        </p>

      </div>

    </div>
  );
};

export default OutputCard;