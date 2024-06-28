import Link from "@docusaurus/Link";
import { FaArrowRight } from "react-icons/fa6";
import ThemedImage from "@theme/ThemedImage";
import { twMerge } from "tailwind-merge";

const fileTrees = [
  {
    name: "Chat Completions",
    status: "work in progress",
  },
  {
    name: "Embeddings",
  },
  {
    name: "Files",
    status: "coming soon",
  },
  {
    name: "Assistants",
    status: "coming soon",
  },
  {
    name: "Fine-tuning",
    status: "coming soon",
  },
  {
    name: "...",
  },
];

const modelRegistry = [
  {
    name: "Cortex",
    logo: "/img/logos/cortex-logo-mark.svg",
  },
  {
    name: "Hugging Face",
    logo: "/img/logos/hf.svg",
  },
  {
    name: "Nvidia NGC",
    logo: "/img/logos/nvidia.svg",
  },
];

const OAIReplacement = () => {
  return (
    <div className="container">
      <div className="mt-16 flex gap-10">
        <div>
          <h2 className="text-4xl font-grotesk leading-relaxed">
            Full OpenAI <br /> API equivalence
          </h2>
          <p className="text-black/60 dark:text-white/60 mb-2 mx-auto text-lg">
            Cortex has OpenAI-equivalent API, making it easy for anyone to
            switch to a <span className="font-bold">self-hosted</span>,{" "}
            <span className="font-bold">open source</span> alternative.
          </p>
          <div className="mt-8">
            <Link
              to="/api-reference"
              className="inline-flex py-2 px-4 font-medium bg-black dark:bg-white text-white dark:text-black border dark:border-gray-600 rounded-lg items-center hover:no-underline hover:text-white hover:dark:text-black"
            >
              API Reference
            </Link>
          </div>
          <div className="mt-6">
            {fileTrees.map((x) => {
              return (
                <div className="flex w-full border-b dark:border-neutral-700 border-neutral-200 items-center py-3 gap-x-2 last:border-none">
                  <ThemedImage
                    alt="Illustration Robots"
                    sources={{
                      light: "/img/homepage/cloud-tree.svg",
                      dark: "/img/homepage/cloud-tree.svg",
                    }}
                  />
                  <h4 className="font-medium mb-0">{x.name}</h4>
                  <span
                    className={twMerge(
                      "py-0.5 px-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg font-medium",
                      x.status === "work in progress" &&
                        "bg-blue-100 dark:bg-blue-300 text-blue-500 dark:text-white"
                    )}
                  >
                    {x.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-8 w-1/2 flex-shrink-0">
          <div className="cardContainer w-full h-full rounded-xl"></div>
        </div>
      </div>

      <div className="my-20 text-center">
        <h2 className="text-4xl font-grotesk leading-relaxed">
          Multi-engine Hardware Support
        </h2>

        <div className="relative w-full lg:w-1/2 mx-auto mt-1 pt-4 pb-20">
          <div
            className="rounded-lg border-neutral-800 border border-solid w-full bg-neutral-900 overflow-hidden flex flex-col"
            style={{
              boxShadow:
                "0px 0px 0px 0.5px rgba(255, 255, 255, 0.20), 0px 5px 12px 0px rgba(0, 0, 0, 0.50), 0px 16px 40px 0px rgba(0, 0, 0, 0.46)",
            }}
          >
            <div className="flex border-b border-neutral-700 bg-neutral-800 gap-2 py-3 w-full">
              <div className="rounded-full w-3 h-3 bg-red-500 ml-3" />
              <div className="rounded-full w-3 h-3 bg-yellow-500" />
              <div className="rounded-full w-3 h-3 bg-green-500" />
            </div>
            <div className="w-full">
              <div className="p-4 text-left">
                <code className="bg-transparent border-none inline-block">
                  <p className="text-neutral-500 mb-0">
                    # Run using specific backend
                  </p>
                  <p className="mb-0">
                    <span className="text-green-600">cortex&nbsp;</span>
                    <span className="text-white">run&nbsp;</span>
                    <span className="text-cyan-600">llama3:onnx</span>
                  </p>
                  <p className="mb-0">
                    <span className="text-green-600">cortex&nbsp;</span>
                    <span className="text-white">run&nbsp;</span>
                    <span className="text-cyan-600">llama3:gguf</span>
                  </p>
                  <p className="mb-0">
                    <span className="text-green-600">cortex&nbsp;</span>
                    <span className="text-white">run&nbsp;</span>
                    <span className="text-cyan-600">
                      openhermes-2.5:tensorrt-llm
                    </span>
                  </p>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Models */}
      <div className="mt-16 flex gap-10">
        <div>
          <h2 className="text-4xl font-grotesk leading-relaxed">
            Pull from any Model Registry
          </h2>
          <p className="text-black/60 dark:text-white/60 mb-2 mx-auto text-lg">
            Cortex allows you to pull and run models from anywhere using a
            simple, Docker-inspired command syntax.
          </p>
          <p className="text-black/60 dark:text-white/60 mb-2 mx-auto text-lg">
            You can easily create your own Cortex-compatible model registry,
            which is based on Git.
          </p>
          <div className="mt-8">
            <Link
              to="/api-reference"
              className="inline-flex py-2 px-4 font-medium bg-black dark:bg-white text-white dark:text-black border dark:border-gray-600 rounded-lg items-center hover:no-underline hover:text-white hover:dark:text-black"
            >
              API Reference
            </Link>
          </div>
          <div className="mt-6">
            {modelRegistry.map((x) => {
              return (
                <div className="flex w-full border-b dark:border-neutral-700 border-neutral-200 items-center py-3 gap-x-2 last:border-none">
                  <ThemedImage
                    alt="Illustration Robots"
                    width={20}
                    sources={{
                      light: x.logo,
                      dark: x.logo,
                    }}
                  />
                  <div className="flex w-full justify-between">
                    <h4 className="font-medium mb-0">{x.name}</h4>
                    <Link to="/models" className="mb-0 text-sm">
                      View models
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-8 w-1/2 flex-shrink-0">
          <div className="cardContainer w-full h-full rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default OAIReplacement;
