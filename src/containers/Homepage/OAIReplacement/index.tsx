import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import useWindowSize from "@site/src/hooks/useWindowSize";

const floatingAnimations = [
  {
    x: [0, 10, 10, 0],
    y: [4, 20, 10, 4],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  {
    x: [4, 0, 0, 4],
    y: [0, 10, -8, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  {
    x: [0, 8, -10, 0],
    y: [4, 15, 15, 4],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  {
    x: [8, -10, 0, 8],
    y: [2, 6, 4, 2],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  {
    x: [0, 2, 6, 0],
    y: [0, 10, 10, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  {
    x: [20, 8, 8, 20],
    y: [4, 4, -6, 4],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  {
    x: [2, 10, -8, 2],
    y: [0, 12, 8, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  {
    x: [0, -2, 8, 0],
    y: [0, 0, 10, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
];

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
    link: "/models",
  },
  {
    name: "Hugging Face",
    logo: "/img/logos/hf.svg",
    link: "https://huggingface.co/models",
  },
  {
    name: "Nvidia NGC",
    logo: "/img/logos/nvidia.svg",
    link: "https://catalog.ngc.nvidia.com/models?filters=&orderBy=weightPopularDESC&query=&page=&pageSize=",
  },
];

const list = [
  "/chat/completions",
  "/embeddings",
  "/function-calling",
  "/runs",
  "/fine-tuning",
  "/files",
  "/models",
  "/assistants",
  "/...",
];

const OAIReplacement = () => {
  const size = useWindowSize();

  return (
    <div className="container">
      <div className="mt-16 flex flex-col lg:flex-row gap-10">
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
            {fileTrees.map((x, i) => {
              return (
                <div
                  className="flex w-full border-b dark:border-neutral-700 border-neutral-200 items-center py-3 gap-x-2 last:border-none"
                  key={i}
                >
                  <ThemedImage
                    alt="Illustration Robots"
                    sources={{
                      light: "/img/homepage/cloud-tree.png",
                      dark: "/img/homepage/cloud-tree-dark.png",
                    }}
                  />
                  <h4 className="font-medium mb-0">{x.name}</h4>
                  <span
                    className={twMerge(
                      "py-0.5 px-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg font-medium",
                      x.status === "work in progress" &&
                        "bg-blue-100 dark:bg-blue-800/40 dark:text-blue-300 text-blue-500"
                    )}
                  >
                    {x.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-8 w-full lg:w-1/2 flex-shrink-0">
          <div className="cardContainer w-full h-full rounded-xl">
            <div className="pt-4 pb-10">
              <div className="text-center">
                <div>
                  <code className="text-green-600">
                    + const ai = require('cortexso')
                  </code>
                </div>
                <div>
                  <code>- const ai = require('openai')</code>
                </div>
              </div>
              <div className="text-center mt-8">
                <ThemedImage
                  alt="Illustration Robots"
                  sources={{
                    light: "/img/homepage/arrow-icon.svg",
                    dark: "/img/homepage/arrow-icon-dark.svg",
                  }}
                />
              </div>
              <div className="flex ml-8">
                <div className="bg-neutral-800 dark:bg-neutral-300 p-2 rounded-xl w-full lg:w-1/2 relative z-10">
                  <div className="bg-white dark:bg-neutral-600 flex w-full items-center p-3 rounded-lg mb-2 justify-center">
                    <ThemedImage
                      width={100}
                      sources={{
                        light: "/img/logos/cortex-logo.svg",
                        dark: "/img/logos/cortex-logo-dark.svg",
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    {list.map((y, i) => {
                      return (
                        <div
                          className="bg-white dark:bg-neutral-600 flex w-full items-center justify-center px-2 py-1.5 rounded-lg"
                          key={i}
                        >
                          {y}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="border border-neutral-200 dark:border-neutral-700 p-2 rounded-xl w-full lg:w-1/2 relative top-4 -left-8">
                  <div className="bg-neutral-100 dark:bg-neutral-600 flex w-full items-center p-3 rounded-lg mb-2 justify-center">
                    <ThemedImage
                      width={100}
                      sources={{
                        light: "/img/logos/openai-logo.svg",
                        dark: "/img/logos/openai-logo-dark.svg",
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    {list.map((y, i) => {
                      return (
                        <div
                          className="bg-neutral-100 dark:bg-neutral-600 flex w-full items-center justify-center px-2 py-1.5 rounded-lg"
                          key={i}
                        >
                          {y}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 text-center relative lg:mt-20 lg:mb-32">
        <h2 className="text-4xl font-grotesk leading-relaxed mt-10">
          Multi-engine <br /> Hardware Support
        </h2>

        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-x-3 border border-neutral-200 dark:border-neutral-700 p-3 rounded-xl">
            <ThemedImage
              alt="Illustration Robots"
              width={20}
              sources={{
                light: "/img/homepage/box.png",
                dark: "/img/homepage/box-dark.png",
              }}
            />
            <span>llama.cpp</span>
          </div>
          <div className="flex items-center gap-x-3 border border-neutral-200 dark:border-neutral-700 p-3 rounded-xl">
            <ThemedImage
              alt="Illustration Robots"
              width={20}
              sources={{
                light: "/img/homepage/box.png",
                dark: "/img/homepage/box-dark.png",
              }}
            />
            <span>ONNX</span>
          </div>
          <div className="flex items-center gap-x-3 border border-neutral-200 dark:border-neutral-700 p-3 rounded-xl">
            <ThemedImage
              alt="Illustration Robots"
              width={20}
              sources={{
                light: "/img/homepage/box.png",
                dark: "/img/homepage/box-dark.png",
              }}
            />
            <span>TensorRT-LLM</span>
          </div>
        </div>

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
                    # Run using specific hardware
                  </p>
                  <p className="mb-0">
                    <span className="text-green-600">cortex&nbsp;</span>
                    <span className="text-white">run&nbsp;</span>
                    <span className="text-cyan-600">llama3:tensorrt</span>
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
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 items-center justify-center text-center gap-8">
          <motion.div
            className="flex flex-col items-center w-24 mx-auto lg:absolute bottom-0 left-40"
            animate={size.width > 1024 ? floatingAnimations[0] : {}}
          >
            <img
              src="/img/homepage/iot_sbcs.png"
              alt="IoT & SBCs"
              className="mb-1 object-cover"
            />
            <p className="mb-0">IoT & SBCs</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center w-24 mx-auto lg:absolute bottom-40 left-20"
            animate={size.width > 1024 ? floatingAnimations[1] : {}}
          >
            <img
              src="/img/homepage/wearables.png"
              alt="Wearables"
              className="mb-1 object-cover"
            />
            <p className="mb-0">Wearables</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center w-24 mx-auto lg:absolute top-48 left-40"
            animate={size.width > 1024 ? floatingAnimations[2] : {}}
          >
            <img
              src="/img/homepage/phones.png"
              alt="Phones"
              className="mb-1 object-cover"
            />
            <p className="mb-0">Phones</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center w-24 mx-auto lg:absolute top-10 left-80"
            animate={size.width > 1024 ? floatingAnimations[3] : {}}
          >
            <img
              src="/img/homepage/cpus_npus.png"
              alt="CPUs, NPUs"
              className="mb-1 object-cover"
            />
            <p className="mb-0">CPUs, NPUs</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center w-24 mx-auto lg:absolute top-10 right-80"
            animate={size.width > 1024 ? floatingAnimations[4] : {}}
          >
            <img
              src="/img/homepage/desktops.png"
              alt="Desktops"
              className="mb-1 object-cover"
            />
            <p className="mb-0">Desktops</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center w-24 mx-auto lg:absolute top-48 right-40"
            animate={size.width > 1024 ? floatingAnimations[5] : {}}
          >
            <img
              src="/img/homepage/industrial_pcs.png"
              alt="Industrial PCs"
              className="mb-1 object-cover"
            />
            <p className="mb-0">Industrial PCs</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center w-24 mx-auto lg:absolute bottom-40 right-20"
            animate={size.width > 1024 ? floatingAnimations[6] : {}}
          >
            <img
              src="/img/homepage/server.png"
              alt="Server"
              className="mb-1 object-cover w-14"
            />
            <p className="mb-0">Server</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center w-24 mx-auto lg:absolute bottom-0 right-40"
            animate={size.width > 1024 ? floatingAnimations[7] : {}}
          >
            <img
              src="/img/homepage/robots.png"
              alt="Robots"
              className="w-16 mb-1"
            />
            <p className="mb-0">Robots</p>
          </motion.div>
        </div>
      </div>

      {/* Models */}
      <div className="mt-16 flex flex-col lg:flex-row gap-10">
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
            {modelRegistry.map((x, i) => {
              return (
                <div
                  className="flex w-full border-b dark:border-neutral-700 border-neutral-200 items-center py-3 gap-x-2 last:border-none"
                  key={i}
                >
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
                    <Link to={x.link} className="mb-0 text-sm">
                      View models
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-8 lg:w-1/2 w-full flex-shrink-0">
          <div className="cardContainer w-full h-full rounded-xl">
            <ThemedImage
              alt="Illustration Robots"
              sources={{
                light: "/img/homepage/model-registry.png",
                dark: "/img/homepage/model-registry-dark.png",
              }}
            />
            <div className="relative w-full lg:w-3/4 mx-auto mt-1 pt-4 pb-4">
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
                      <p className="text-neutral-500 mb-0"># Run</p>
                      <p className="mb-0">
                        <span className="text-green-600">cortex&nbsp;</span>
                        <span className="text-white">run&nbsp;</span>
                        <span className="text-cyan-600">llama3</span>
                      </p>
                      <p className="mb-0">
                        <span className="text-green-600">cortex&nbsp;</span>
                        <span className="text-white">run&nbsp;</span>
                        <span className="text-cyan-600">mistral instruct</span>
                      </p>
                      <p className="mb-0">
                        <span className="text-green-600">cortex&nbsp;</span>
                        <span className="text-white">run&nbsp;</span>
                        <span className="text-cyan-600">gemma</span>
                      </p>
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OAIReplacement;
