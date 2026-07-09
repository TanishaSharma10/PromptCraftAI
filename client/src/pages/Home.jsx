import Hero from "../components/Hero";
import PromptForm from "../components/PromptForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl">
        <Hero />

        <PromptForm />
      </div>
    </div>
  );
};

export default Home;