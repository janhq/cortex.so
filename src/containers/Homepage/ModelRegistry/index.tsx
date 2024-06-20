const ModelRegistry = () => {
  return (
    <div className="container">
      <div className="mt-20">
        <h2 className="text-4xl font-grotesk">Model Registry</h2>
        <p className="text-black/60 dark:text-white/60 mb-2">
          Precompiled, open-source models.
        </p>
      </div>
      <div className="py-8 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2 flex-shrink-0 h-[672px]">
          <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0">
            Model Hub
          </h3>
          <div className="border dark:border-neutral-800 border-neutral-300 rounded-lg h-full p-8"></div>
        </div>
        <div className="w-full">
          <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0">
            Use Models in Jan
          </h3>
          <div className="flex flex-col gap-8">
            <div className="bg-neutral-100 dark:bg-neutral-800 min-h-80 rounded-lg"></div>
            <div className="bg-neutral-100 dark:bg-neutral-800 min-h-80 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelRegistry;
