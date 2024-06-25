import Link from "@docusaurus/Link";
import { FaArrowRight } from "react-icons/fa6";

const OAIReplacement = () => {
  return (
    <div className="container text-center">
      <div className="mt-20">
        <h2 className="text-4xl font-grotesk">OpenAI Compatible</h2>
        <p className="text-black/60 dark:text-white/60 mb-2 w-full lg:w-1/2 mx-auto text-lg">
          Support local AI in your application, with minimal code changes
        </p>
        <div>
          <div className="flex items-center justify-center mt-8 gap-x-2 cursor-pointer">
            <div className="w-8 h-8 dark:bg-neutral-800 bg-neutral-100 flex rounded-full items-center justify-center">
              <FaArrowRight className="text-blue-300 -rotate-45" size={20} />
            </div>
            <Link to="/docs/server" className="!no-underline">
              <p className="mb-0 text-neutral-800 font-medium dark:text-white">
                Learn more
              </p>
            </Link>
          </div>
        </div>

        <div className="py-8 flex flex-col lg:flex-row items-start gap-8 text-left mt-4">
          <div className="cardContainer">
            <h2>OpenAI</h2>
            <div className="min-h-80 flex items-center w-full justify-end flex-col gap-24 relative">
              <div className="flex gap-2  absolute top-32 scale-75 md:scale-100">
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all">
                  <span>/chat/completions</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/embeddings</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/function-calling</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/runs</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/fine-tuning</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/fine-tuning</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/files</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/models</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/assistants</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/...</span>
                </div>
              </div>
              <div className="bg-neutral-800 w-full text-center py-4 rounded-lg">
                <h3 className="mb-0 text-white">OpenAI API</h3>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <h2>Cortex</h2>
            <div className="min-h-80 flex items-center w-full justify-end flex-col gap-24 relative">
              <div className="flex gap-2  absolute top-32 scale-75 md:scale-100">
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all">
                  <span>/chat/completions</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/embeddings</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/function-calling</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/runs</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/fine-tuning</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/fine-tuning</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/files</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/models</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/assistants</span>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 w-56 text-center p-1 px-2 rounded-lg border border-neutral-200 -rotate-[70deg] hover:-translate-y-2 transition-all -ml-[188px]">
                  <span>/...</span>
                </div>
              </div>
              <div className="bg-blue-300 w-full text-center py-4 rounded-lg">
                <h3 className="mb-0 text-black">OpenAI-equivalent API</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OAIReplacement;
