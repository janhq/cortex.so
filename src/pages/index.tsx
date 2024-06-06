import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import TypewriterEffect from "@site/src/components/typeWriterWffect";
import Link from "@docusaurus/Link";
import { CardContainer, CardBody, CardItem } from "@site/src/components/3dCard";
import { Spotlight } from "@site/src/components/spotlight";
// import { useColorMode } from "@docusaurus/theme-common";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  // const { colorMode, setColorMode } = useColorMode();

  // console.log(colorMode);

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
    <Layout title="Homepage" wrapperClassName="test">
      <main>
        {/* <div className="container">
          <div className="text-center mt-20">
            <h1 className="text-6xl text-white">Run LLMs Easily</h1>
            <p className="text-2xl font-serif">
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
        </div> */}

        {/* <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="black"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Spotlight <br /> is the new trend.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Spotlight effect is a great way to draw attention to a specific
              part of the page. Here, we are drawing the attention towards the
              text section of the page. I don&apos;t know why but I&apos;m
              running out of copy.
            </p>
          </div>
        </div> */}
      </main>
    </Layout>
  );
};

export default Home;
