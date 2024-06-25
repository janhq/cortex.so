const GettingStartedSection = () => {
  return (
    <div className="container">
      <div className="mt-10 md:mt-40 text-center">
        <h2 className="text-4xl font-grotesk">Getting Started</h2>
        <p className="text-black/60 dark:text-white/60 text-lg">
          Command Line Installation
        </p>
      </div>
      <div className="relative w-full lg:w-1/2 mx-auto">
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
  );
};

export default GettingStartedSection;
