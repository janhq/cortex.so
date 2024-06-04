import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import TypewriterEffect from "@site/src/components/typeWriterWffect";
import Link from "@docusaurus/Link";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@site/src//components/3dCard";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  const words = [
    {
      text: "npm",
    },
    {
      text: "i",
    },
    {
      text: "-g",
    },
    {
      text: "@janhq/cortex",
    },
  ];

  return (
    <Layout title="Homepage">
      <main>
        <div className="container">
          <div className="text-center mt-40">
            <h1 className="text-6xl">Run LLMs Easily</h1>
            <p className="text-2xl">
              OpenAI Compatible. Multi-engine. For Production
            </p>

            <code className="bg-transparent my-10 inline-block border-none">
              <TypewriterEffect words={words} />
            </code>

            <CardContainer className="relative w-full lg:w-1/2 mx-auto">
              <CardBody className="rounded-lg dark:border-neutral-800 border-neutral-200 border border-solid w-full">
                <div className="flex p-2 gap-1.5">
                  <div className="rounded-full w-3 h-3 bg-red-500" />
                  <div className="rounded-full w-3 h-3 bg-yellow-500" />
                  <div className="rounded-full w-3 h-3 bg-green-500" />
                </div>
                <CardItem>
                  <div className="p-4 text-left">
                    <code className="bg-transparent border-none inline-block">
                      <p className="mb-0"># Download a GGUF model</p>
                      <p className="mb-3">cortex models pull llama3</p>
                      <p className="mb-0"># Run the model to start chatting</p>
                      <p className="mb-3">cortex models run llama3</p>
                      <p className="mb-0">
                        # Run Cortex in OpenAI-compatible server mode
                      </p>
                      <p className="mb-0">cortex serve</p>
                    </code>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
