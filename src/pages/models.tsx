import Layout from "@theme/Layout";
import { usePluginData } from "@docusaurus/useGlobalData";
import { CloudDownload } from "lucide-react";
import Link from "@docusaurus/Link";
import { ChangeEvent, useState } from "react";

const ModelsPage = () => {
  const listModels = usePluginData("list-models");
  const [searchValue, setSearchValue] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setCheckedItems((prevState) => {
      if (checked) {
        return [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    });
  };

  const filterModelsByBranches = (
    models: any[],
    search: string,
    filters: string[]
  ) => {
    return models.filter((model) => {
      if (!model.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }

      if (filters.length > 0) {
        return model.branches.some((branch: { name: string }) =>
          filters.some((filter) =>
            branch.name.toLowerCase().includes(filter.toLowerCase())
          )
        );
      } else {
        return model;
      }
    });
  };

  const filteredModels = filterModelsByBranches(
    listModels as any[],
    searchValue,
    checkedItems
  );

  return (
    <Layout title="Homepage">
      <main className="overflow-hidden flex">
        <div className="hidden lg:block w-80 border-r dark:border-neutral-800 border-neutral-300 p-8">
          <p className="mb-3 font-semibold">Format</p>
          <div className="flex items-center mb-2">
            <input
              id="GGUF"
              type="checkbox"
              value="gguf"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
            />
            <label
              htmlFor="GGUF"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              GGUF
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="TensorRT"
              type="checkbox"
              value="tensorrt"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
            />
            <label
              htmlFor="TensorRT"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              TensorRT
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="ONNX"
              type="checkbox"
              value="onnx"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
            />
            <label
              htmlFor="ONNX"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              ONNX
            </label>
          </div>
        </div>
        <div className="w-full p-4 lg:p-8">
          <div className="bg-neutral-100 dark:bg-neutral-900 py-10 rounded-lg">
            <div className="w-full lg:w-3/4 mx-auto px-4">
              <div className="relative w-full lg:w-1/2 mx-auto">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4 mx-auto px-4 mt-10">
            {(filteredModels as any[])
              .filter(
                (x) =>
                  !x.name.includes("cortexso/gpt-3.5-turbo") &&
                  !x.name.includes("cortexso/gpt-4o")
              )
              .map((model, i) => {
                let hasGguf = model.branches.some((x: { name: string }) =>
                  x.name.toLowerCase().includes("gguf")
                );
                let hasOnnx = model.branches.some((x: { name: string }) =>
                  x.name.toLowerCase().includes("onnx")
                );
                let hasTensorrt = model.branches.some((x: { name: string }) =>
                  x.name.toLowerCase().includes("tensorrt")
                );

                return (
                  <div
                    key={model.id}
                    className="flex justify-between items-center py-4 border-b border-neutral-200 dark:border-neutral-700 last:border-none"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <h3 className="mb-0">
                        {model.name.replace("cortexso/", "")}
                      </h3>
                      <div className="flex items-center gap-4">
                        {hasGguf && (
                          <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg py-1 px-3 flex items-center">
                            <p className="mb-0 font-medium">GGUF</p>
                          </div>
                        )}
                        {hasOnnx && (
                          <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg py-1 px-3 flex items-center">
                            <p className="mb-0 font-medium">ONNX</p>
                          </div>
                        )}
                        {hasTensorrt && (
                          <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg py-1 px-3 flex items-center">
                            <p className="mb-0 font-medium">TensorRT-LLM</p>
                          </div>
                        )}
                        <p className="mb-0 flex items-center gap-x-2">
                          {model.downloads} <CloudDownload size={16} />
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/models/${model.name.replace("cortexso/", "")}`}
                      className="bg-neutral-100 h-12 flex justify-center items-center py-2 px-4 rounded-lg font-medium dark:bg-neutral-800 text-black dark:text-white hover:no-underline !cursor-pointer"
                    >
                      View details
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
