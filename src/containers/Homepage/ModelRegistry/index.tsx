import ThemedImage from "@theme/ThemedImage";
import { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";
import { toGibibytes } from "@site/src/utils";

const ModelRegistry = () => {
  const listModels = usePluginData("list-models");
  console.log(listModels);

  return (
    <div className="container">
      <div className="mt-20">
        <h2 className="text-4xl font-grotesk">Model Registry</h2>
        <p className="text-black/60 dark:text-white/60 mb-2">
          Precompiled, open-source models.
        </p>
      </div>
      <div className="py-8 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-3/5 flex-shrink-0 h-[750px]">
          <div className="border dark:border-neutral-800 border-neutral-300 rounded-lg h-full p-8 flex flex-col justify-between">
            <div>
              {(listModels as any[]).slice(0, 8).map((model) => {
                return (
                  <div
                    key={model.id}
                    className="flex justify-between items-center py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-none"
                  >
                    <div>
                      <h3 className="mb-2">
                        {model.name.replace("cortexhub/", "")}
                      </h3>
                    </div>
                    <Link
                      href={`/models/${model.name.replace("cortexhub/", "")}`}
                      className="bg-neutral-100 h-12 flex justify-center items-center py-2 px-4 rounded-lg font-medium dark:bg-neutral-800 text-black dark:text-white hover:no-underline !cursor-pointer"
                    >
                      Details models
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <Link to="/">See all models</Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-8">
            <div className="min-h-80 relative overflow-hidden">
              <ThemedImage
                alt="Illustration Element Stars"
                className="rounded-lg object-cover"
                width={800}
                sources={{
                  light: "/img/homepage/categories1.svg",
                  dark: "/img/homepage/categories1-dark.svg",
                }}
              />
            </div>
            <div className="min-h-80 relative overflow-hidden">
              <ThemedImage
                alt="Illustration Element Stars"
                className="rounded-lg object-cover"
                width={800}
                sources={{
                  light: "/img/homepage/categories2.svg",
                  dark: "/img/homepage/categories2-dark.svg",
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
