import ThemedImage from "@theme/ThemedImage";
import { downloadFile, listModels, listFiles } from "@huggingface/hub";
import { useEffect, useState } from "react";

export interface Model {
  id: string;
  name: string;
  private: boolean;
  downloads: number;
  gated: boolean;
  likes: number;
  updatedAt: Date;
}

const ModelRegistry = () => {
  // const [models, setModels] = useState<Model[]>([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchModelsAndFiles = async () => {
  //     try {
  //       const fetchedModels = [];
  //       for await (const model of listModels({
  //         search: { owner: "cortexhub" },
  //       })) {
  //         try {
  //           const files = [];
  //           let readmeContent = "README.md not available";
  //           for await (const fileInfo of listFiles({
  //             repo: "cortexhub/llama3",
  //           })) {
  //             files.push(fileInfo);
  //             if (fileInfo.path === "README.md") {
  //               const response = await downloadFile({
  //                 repo: model.name,
  //                 path: "README.md",
  //               });
  //               if (response && response.text) {
  //                 readmeContent = await response.text();
  //               }
  //             }
  //           }
  //           fetchedModels.push({ ...model, files, readmeContent });
  //         } catch (error) {
  //           console.error("Error fetching files:", error);
  //           fetchedModels.push({
  //             ...model,
  //             files: [],
  //             readmeContent: "Error fetching README.md",
  //             error: "Error fetching files",
  //           });
  //         }
  //       }
  //       setModels(fetchedModels);
  //     } catch (error) {
  //       console.error("Error fetching models:", error);
  //       setError("Error fetching models");
  //     }
  //   };

  //   fetchModelsAndFiles();
  // }, []);

  // console.log(models);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

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
            {/* {models.map((model) => {
              return (
                <div key={model.id}>
                  <p>{model.name.replace("cortexhub/", "")}</p>
                </div>
              );
            })} */}
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
