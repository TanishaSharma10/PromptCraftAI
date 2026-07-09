import Hero from "../components/Hero";
import PromptForm from "../components/PromptForm";
import OutputCard from "../components/OutputCard";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[160px] opacity-20 -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-20 bottom-0 right-0"></div>

      <div className="relative z-10 flex justify-center px-6 py-20">

        <div className="w-full max-w-5xl">

          <Hero />

          <PromptForm />

          <OutputCard />

        </div>

      </div>

    </div>
  );
};

export default Home;