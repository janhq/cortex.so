import Layout from "@theme/Layout";
import { usePluginData } from "@docusaurus/useGlobalData";
import { CloudDownload } from "lucide-react";
import Link from "@docusaurus/Link";

const ModelsPage = () => {
  const listModels = usePluginData("list-models");

  return (
    <Layout title="Homepage">
      <main className="overflow-hidden flex">
        <div className="w-80 border-r dark:border-neutral-800 border-neutral-300 p-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officia laudantium blanditiis? Exercitationem ad sequi suscipit
            natus perferendis. Reiciendis facilis quis doloribus necessitatibus
            molestias molestiae rem maiores deleniti quae atque!
          </p>
        </div>
        <div className="">
          <div className="bg-neutral-100 dark:bg-neutral-900 py-20">
            <div className="w-full lg:w-3/4 mx-auto px-4">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                recusandae modi, corporis, neque voluptatum nisi ea alias vitae
                ut blanditiis iure, laudantium veritatis fugiat delectus quam
                obcaecati sint? Aliquid, quasi!
              </p>
            </div>
          </div>

          <div className="w-full lg:w-3/4 mx-auto px-4 mt-10">
            {(listModels as any[]).map((model) => {
              return (
                <div
                  key={model.id}
                  className="flex justify-between items-center py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-none"
                >
                  <div>
                    <h3 className="mb-1">
                      {model.name.replace("cortexhub/", "")}
                    </h3>
                    <p className="mb-0 flex items-center gap-x-2">
                      {model.downloads} <CloudDownload size={16} />
                    </p>
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
        </div>
      </main>
    </Layout>
  );
};

export default ModelsPage;
