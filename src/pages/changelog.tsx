import { usePluginData } from "@docusaurus/useGlobalData";
import React from "react";
import Layout from "@theme/Layout";

import { format } from "date-fns";

type Changelog = {
  title: string;
  description: string;
  date: string;
  ogImage: string;
  version: string;
  url: string;
};

const Changelog = () => {
  const data = usePluginData("changelog-list") as Changelog[];

  return (
    <Layout title="Changelog">
      <main>
        <div className="w-full lg:w-1/2 mx-auto text-center mt-16">
          <h2 className="text-4xl font-grotesk">Changelog</h2>
          <p className="text-black/60 dark:text-white/60 text-lg">
            Latest release updates from the Cortex team.
          </p>
        </div>

        <div className="w-full lg:w-3/4 mx-auto text-left">
          <div className="mt-20">
            {data?.map((log: Changelog, i: number) => {
              return (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-3/12 -mt-2">
                    <p className="text-black/60 dark:text-white/60 font-medium">
                      {format(log?.date, "MMMM do, yyyy")}
                    </p>
                  </div>
                  <a
                    href={`./changelog/${log?.url}`}
                    className="border-l dark:nx-border-neutral-800 w-full cursor-pointer"
                  >
                    <div className="flex gap-8 items-start w-full">
                      <div className="w-2 h-2 relative -left-1 bg-blue-500 rounded-full flex-shrink-0" />
                      <div className="pb-14 w-full -mt-2">
                        <div className="w-full pb-4 px-8 rounded-lg flex flex-col lg:flex-row justify-between">
                          <div>
                            <h6 className="text-lg lg:text-2xl font-bold">
                              {log?.title}
                            </h6>
                            {log?.description && (
                              <p className="mt-2 text-medium">
                                {log?.description}
                              </p>
                            )}
                            <p className="mt-2 text-black/60 dark:text-white/60 text-medium">
                              New release Jan App v{log?.version}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Changelog;
