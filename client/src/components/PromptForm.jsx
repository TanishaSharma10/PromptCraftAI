const PromptForm = () => {
    return (
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
  
        <h2 className="text-2xl font-semibold mb-5">
          Enter Your Prompt
        </h2>
  
        <textarea
          rows="6"
          placeholder="Describe what you want AI to help you with..."
          className="w-full rounded-xl bg-slate-900 border border-gray-700 p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        />
  
        <button
          className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition duration-300"
        >
          ✨ Enhance Prompt
        </button>
  
      </div>
    );
  };
  
  export default PromptForm;