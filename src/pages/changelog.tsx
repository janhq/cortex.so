import { usePluginData } from "@docusaurus/useGlobalData";
import React from "react";
import Layout from "@theme/Layout";

import { format } from "date-fns";

type Changelog = {
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    version: string;
    description: string;
  };
  body: string;
};

const Changelog = () => {
  const data = usePluginData("changelog-list") as any[];

  return (
    <Layout title="Changelog">
      <main>
        <div className="w-full lg:w-1/2 mx-auto text-center mt-16">
          <h2 className="text-4xl font-grotesk">Changelog</h2>
          <p className="text-black/60 dark:text-white/60 text-lg">
            Latest release and updates from the Cortex team.
          </p>
        </div>

        <div className="w-full lg:w-3/4 mx-auto text-left">
          <div className="mt-20">
            {data?.map((log: Changelog, i: number) => {
              return (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-3/12 -mt-2 text-right pl-4">
                    <p className="text-black/60 dark:text-white/60 font-medium">
                      {format(log?.frontmatter.date, "MMMM do, yyyy")}
                    </p>
                  </div>
                  <a
                    href={`./changelog/${log?.slug.toLocaleLowerCase()}`}
                    className="border-l dark:nx-border-neutral-800 w-full cursor-pointer no-underline hover:no-underline group inline-block"
                  >
                    <div className="flex gap-8 items-start w-full">
                      <div className="w-2 h-2 relative -left-1 bg-blue-500 rounded-full flex-shrink-0" />
                      <div className="pb-12 -mt-2">
                        <div className="w-full pb-4 px-8 rounded-lg flex flex-col lg:flex-row justify-between">
                          <div>
                            <h6 className="text-base mb-1 lg:text-2xl font-bold text-black dark:text-white group-hover:text-blue-700">
                              {log?.frontmatter.title}
                            </h6>
                            {log?.frontmatter.description && (
                              <p className="text-black/60 dark:text-white/60 text-medium mb-0">
                                {log?.frontmatter.description}
                              </p>
                            )}
                            <p className="text-black/60 dark:text-white/60 text-medium mb-0">
                              New release Cortex v{log?.frontmatter.version}
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
