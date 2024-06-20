import ThemedImage from "@theme/ThemedImage";
import { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";

const ModelRegistry = () => {
  const listModels = usePluginData("list-models");

  return (
    <div className="container">
      <div className="mt-20">
        <h2 className="text-4xl font-grotesk">Model Registry</h2>
        <p className="text-black/60 dark:text-white/60 mb-2">
          Precompiled, open-source models.
        </p>
      </div>
      <div className="py-8 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2 flex-shrink-0 h-[690px]">
          <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0">
            Model Hub
          </h3>
          <div className="border dark:border-neutral-800 border-neutral-300 rounded-lg h-full p-8">
            {(listModels as any[]).map((model) => {
              return (
                <div key={model.id} className="py-2">
                  <h3 className="mb-2">
                    {model.name.replace("cortexhub/", "")}
                  </h3>
                  <Link href={`/model/${model.name.replace("cortexhub/", "")}`}>
                    Detail Model
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0">
            Use Models in Jan
          </h3>
          <div className="flex flex-col gap-8">
            <div className="min-h-80 relative overflow-hidden">
              <ThemedImage
                alt="Illustration Element Stars"
                className="rounded-lg object-cover"
                width={1024}
                sources={{
                  light: "/img/homepage/categories1.png",
                  dark: "/img/homepage/categories1-dark.png",
                }}
              />
            </div>
            <div className="min-h-80 relative overflow-hidden">
              <ThemedImage
                alt="Illustration Element Stars"
                className="rounded-lg object-cover"
                width={1024}
                sources={{
                  light: "/img/homepage/categories2.png",
                  dark: "/img/homepage/categories2-dark.png",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelRegistry;
