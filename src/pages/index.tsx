import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <Layout title="Homepage">
      <main>
        {/* Hero section */}
        <div className="pt-40 pb-20 text-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative -mt-[60px]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[var(--ifm-background-color)] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
          <div className="container relative z-50">
            <div className="border border-solid py-2 px-4 inline-block rounded-md mb-8 bg-indigo-600 relative z-40 border-indigo-500">
              <span className="text-white text-sm sm:text-base">
                🚧 Cortex is under construction. Come back on 20th June!
              </span>
            </div>
            <h1 className="text-5xl font-semibold">Run LLMs Easily</h1>
            <p className="text-xl text-black/60 dark:text-white/60">
              OpenAI Compatible. Multi-engine. For Production
            </p>

            <Link to="https://github.com/janhq/cortex" target="_blank">
              <div className="my-6 bg-neutral-900 dark:bg-white items-center inline-flex gap-2 dark:text-black/90 text-white/90 py-2 px-4 rounded-lg">
                <FaGithub size={20} />
                <span className="font-medium">View on github</span>
              </div>
            </Link>

            <div className="relative w-full lg:w-1/2 mx-auto mt-6">
              <div className="rounded-lg dark:border-neutral-800 border-neutral-200 border border-solid w-full bg-neutral-50 dark:bg-neutral-900 overflow-hidden flex flex-col">
                <div className="flex border-b dark:border-neutral-800 border-neutral-200 gap-2 py-3 w-full">
                  <div className="rounded-full w-3 h-3 bg-red-500 ml-3" />
                  <div className="rounded-full w-3 h-3 bg-yellow-500" />
                  <div className="rounded-full w-3 h-3 bg-green-500" />
                </div>
                <div className="w-full">
                  <div className="p-4 text-left">
                    <code className="bg-transparent border-none inline-block">
                      <p className="mb-1">
                        <span className="text-green-600">npm</span> i -g&nbsp;
                        <span className="text-cyan-600">@janhq/cortex</span>
                      </p>
                      <p className="mb-0">
                        <span className="text-green-600">cortex</span> run
                        llama3
                      </p>
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Replacement OpenAI section */}
        <div className="container">
          <div className="p-10 text-center">
            <h1 className="font-semibold">
              Full replacement for OpenAI's platform.
            </h1>
            <p className="w-full mx-auto lg:w-1/2 text-black/60 dark:text-white/60">
              Cortex has an OpenAI equivalent API. Own your entire stack, and
              deploy your own openai equivalent backend in just a few minutes.
            </p>
            <div className="flex items-center gap-8 xl:gap-10 mt-12">
              <div className="relative w-full text-left rounded-xl  text-white bg-neutral-900 dark:border-neutral-800 border-neutral-200 border h-[400px] overflow-hidden">
                <div className="p-8 pb-0">
                  <h3 className="mb-1">API</h3>
                  <p className="mb-0 text-white/60">
                    compatible endpoints like{" "}
                    <code className="bg-neutral-800">/chat</code>{" "}
                    <code className="bg-neutral-800">/completions</code>,
                    <code className="bg-neutral-800">/embeddings</code>. No need
                    to learn a new stack.
                  </p>
                </div>
                <img src="/img/home/api.png" alt="api-illustration" />
              </div>
              <div className="w-full text-left rounded-xl  text-white bg-neutral-900 dark:border-neutral-800 border-neutral-200 border h-[400px] overflow-hidden">
                <div className="p-8 pb-0">
                  <h3 className="mb-1">Client Libraries</h3>
                  <p className="mb-0 text-white/60">
                    Typescript and python libraries. Change 1 line of code to
                    make your app run.
                  </p>
                </div>
                <img src="/img/home/client.png" alt="client-illustration" />
              </div>
              <div className="w-full text-left rounded-xl  text-white bg-neutral-900 dark:border-neutral-800 border-neutral-200 border h-[400px] overflow-hidden">
                <div className="p-8 pb-0">
                  <h3 className="mb-1">CLI</h3>
                  <p className="mb-0 text-white/60">
                    Docker/Ollama inspired CLI interface for easy local
                    development
                  </p>
                </div>
                <img src="/img/home/cli.png" alt="cli-illustration" />
              </div>
            </div>
          </div>
        </div>

        {/* Local */}
        <div className="container mb-40">
          <div className="text-center mt-20">
            <h1 className="font-semibold">
              Runs AI locally & easily on any hardware.
            </h1>
            <p className="mx-auto w-full lg:w-1/2">
              Cortex is multi engine and cross platform, offering multiple
              inference engines to run models securely and performantly from
              development to production.
            </p>
          </div>
          <div className="flex gap-20 mt-20 w-10/12 mx-auto">
            <div className="text-center">
              <h3 className="mb-1">Multi format</h3>
              <p>Cortex supports GGUF, ONNX, and TensorRT-LLM.</p>
            </div>
            <div className="text-center">
              <h3 className="mb-1">Multi GPUS</h3>
              <p>Cortex runs LLMs on stacked GPUs.</p>
            </div>
            <div className="text-center">
              <h3 className="mb-1">Multi Node</h3>
              <p>Cortex can be deployed to your multi node infrastructure.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
