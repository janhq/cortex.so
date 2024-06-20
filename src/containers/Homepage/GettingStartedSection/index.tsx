const GettingStartedSection = () => {
  return (
    <div className="container">
      <div className="mt-10 md:mt-40 text-center">
        <h2 className="text-4xl font-grotesk">Getting Started</h2>
        <p className="text-black/60 dark:text-white/60">
          Command Line Installation
        </p>
      </div>
      <div className="relative w-full lg:w-1/2 mx-auto">
        <div className="rounded-lg border-neutral-800 border border-solid w-full bg-neutral-900 overflow-hidden flex flex-col">
          <div className="flex border-b border-neutral-700 bg-neutral-800 gap-2 py-3 w-full">
            <div className="rounded-full w-3 h-3 bg-red-500 ml-3" />
            <div className="rounded-full w-3 h-3 bg-yellow-500" />
            <div className="rounded-full w-3 h-3 bg-green-500" />
          </div>
          <div className="w-full">
            <div className="p-4 text-left">
              <code className="bg-transparent border-none inline-block">
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

export default GettingStartedSection;
