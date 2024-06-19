import { Button } from "@site/src/components/Button";
import ThemedImage from "@theme/ThemedImage";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-6xl">Run AI Easily</h1>
        <p className="text-xl text-black/60 dark:text-white/60">
          OpenAI Compatible. Multi-engine. For Production
        </p>
        <div className="mt-8">
          <Button>Download</Button>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 mx-auto mt-1 py-14 pb-20">
        <ThemedImage
          alt="Illustration Element"
          className="absolute -left-60 -z-[1]"
          sources={{
            light: "/img/homepage/terminal-element.svg",
            dark: "/img/homepage/terminal-element-dark.svg",
          }}
        />
        <ThemedImage
          alt="Illustration Element Stars"
          className="absolute -right-32 top-40"
          sources={{
            light: "/img/homepage/terminal-stars.svg",
            dark: "/img/homepage/terminal-stars-dark.svg",
          }}
        />
        <div className="rounded-lg border-neutral-800 border border-solid w-full bg-neutral-900 overflow-hidden flex flex-col">
          <div className="flex border-b border-neutral-700 bg-neutral-800 gap-2 py-3 w-full">
            <div className="rounded-full w-3 h-3 bg-red-500 ml-3" />
            <div className="rounded-full w-3 h-3 bg-yellow-500" />
            <div className="rounded-full w-3 h-3 bg-green-500" />
          </div>
          <div className="w-full">
            <div className="p-4 text-left">
              <code className="bg-transparent border-none inline-block">
                <p className="text-neutral-500 mb-0"># Install</p>
                <p className="mb-4">
                  <span className="text-green-600">brew&nbsp;</span>
                  <span className="text-white">install&nbsp;</span>
                  <span className="text-cyan-600">cortexsh</span>
                </p>

                <p className="text-neutral-500 mb-0"># Run</p>
                <p className="mb-4">
                  <span className="text-green-600">cortex&nbsp;</span>
                  <span className="text-white">run&nbsp;</span>
                  <span className="text-cyan-600">llama3</span>
                </p>

                <p className="text-neutral-500 mb-0">
                  # Run using specific backend
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
                  <span className="text-cyan-600">llama3:llamacpp</span>
                </p>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
