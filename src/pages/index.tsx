import Head from "@docusaurus/Head";

import TypewriterEffect from "@site/src/components/TypewriterEffect";
import { Fragment } from "react";

import useDraggable from "@site/src/hooks/useDraggable"; // adjust the path as necessary

import { useHistory } from "@docusaurus/router";
import { FaGithub } from "react-icons/fa";

import { Helmet } from "react-helmet";
import Link from "@docusaurus/Link";

const cortexASCII = `
░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓███████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓█▓▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░  ░▒▓█▓▒░   ░▒▓██████▓▒░  ░▒▓██████▓▒░  
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
 ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░ 
`;

const Home = () => {
  const cortex8bit = useDraggable({ defaultY: 0 });
  const folderClosed = useDraggable({ defaultY: 80 });
  const github8bit = useDraggable({ defaultY: 160 });
  const discord8bit = useDraggable({ defaultY: 240 });
  const history = useHistory();

  const words = [
    {
      text: "npm",
      className: "text-green-400 dark:text-green-400",
    },
    {
      text: "i",
      className: "text-white dark:text-white",
    },
    {
      text: "-g",
      className: "text-white dark:text-white",
    },
    {
      text: "@janhq/cortex",
      className: "text-cyan-400 dark:text-cyan-400",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Homepage - Cortex</title>
      </Head>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/98.css"
        />
      </Helmet>

      <main className="bg-black">
        <div className="h-[680px] relative overflow-hidden">
          <div className="container relative z-50">
            <div className="text-center mt-20">
              <div className="border border-solid py-2 px-4 inline-block rounded-md bg-neutral-400 relative z-40 border-neutral-300 mb-10">
                <span className="text-black text-sm sm:text-base">
                  🚧 Cortex is under construction. Come back on 20th June!
                </span>
              </div>
              <h1 className="text-5xl text-white font-semibold">
                Run LLMs Easily
              </h1>
              <p className="text-xl text-black/60 dark:text-white/60">
                OpenAI Compatible. Multi-engine. For Production
              </p>

              <Link to="https://github.com/janhq/cortex" target="_blank">
                <div className="my-6 bg-neutral-900 dark:bg-white items-center inline-flex gap-2 dark:text-black/90 text-white/90 py-2 px-4 rounded-lg">
                  <FaGithub size={20} />
                  <span className="font-medium text-lg">View on github</span>
                </div>
              </Link>

              {/* <TypewriterEffect words={words} className="font-serif my-10" /> */}

              <div className="window w-full lg:w-1/2 mx-auto mt-8">
                <div className="title-bar">
                  <div className="title-bar-text pl-1">{`Command Prompt`}</div>
                </div>
                <div className="window-body !m-1">
                  <div className="bg-black h-full p-4">
                    <div className="text-white text-left text-sm font-serif">
                      <pre className="text-[6px] p-0 mb-6">{cortexASCII}</pre>
                      <p className="mb-2">
                        <span className="text-green-600">npm</span> i -g&nbsp;
                        <span className="text-cyan-600">@janhq/cortex</span>
                      </p>
                      <p className="mb-0">
                        <span className="text-green-600">cortex</span> run
                        llama3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-full h-full inset-0">
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
          </div>
        </div>

        <div className="flex-col hidden lg:flex fixed top-0 w-full z-[999]">
          <div
            ref={cortex8bit.ref}
            className="p-4 cursor-pointer flex flex-col justify-center items-center gap-2"
            onMouseDown={cortex8bit.handleMouseDown}
            style={{
              position: "absolute",
              left: cortex8bit.position.x,
              top: cortex8bit.position.y,
              zIndex: 9999999,
            }}
          >
            <img
              src="/img/home/cortex-8bit.png"
              alt="Cortex 8bit"
              className="w-10 h-10"
            />
            <p className="text-white text-sm mb-0">Cortex</p>
          </div>

          <div
            className="p-4 cursor-pointer flex flex-col justify-center items-center gap-2"
            ref={folderClosed.ref}
            onMouseDown={folderClosed.handleMouseDown}
            onClick={() => {
              if (!folderClosed.isDragging) {
                history.push("/docs");
              }
            }}
            style={{
              position: "absolute",
              left: folderClosed.position.x,
              top: folderClosed.position.y,
              zIndex: 9999999,
            }}
          >
            <img
              src="/img/home/my-docs.png"
              alt="Directory Closed"
              className="w-10"
            />
            <p className="text-white text-sm mb-0">Docs</p>
          </div>

          <div
            className="p-4 cursor-pointer flex flex-col justify-center items-center gap-2"
            ref={github8bit.ref}
            onMouseDown={github8bit.handleMouseDown}
            onClick={() => {
              if (!github8bit.isDragging) {
                window.open("https://github.com/janhq/cortex", "_blank");
              }
            }}
            style={{
              position: "absolute",
              left: github8bit.position.x,
              top: github8bit.position.y,
              zIndex: 9999999,
            }}
          >
            <img
              src="/img/home/github-8bit.png"
              alt="Githhub 8Bit"
              className="w-10"
            />
            <p className="text-white text-sm mb-0">Github</p>
          </div>

          <div
            className="p-4 cursor-pointer flex flex-col justify-center items-center gap-2"
            ref={discord8bit.ref}
            onMouseDown={discord8bit.handleMouseDown}
            onClick={() => {
              if (!discord8bit.isDragging) {
                window.open("https://discord.gg/FTk2MvZwJH", "_blank");
              }
            }}
            style={{
              position: "absolute",
              left: discord8bit.position.x,
              top: discord8bit.position.y,
              zIndex: 9999999,
            }}
          >
            <img
              src="/img/home/discord-8bit.png"
              alt="Discord 8Bit"
              className="w-10"
            />
            <p className="text-white text-sm mb-0">Discord</p>
          </div>
        </div>

        <div className="pb-20 bg-black">
          <div className="p-10 text-center container">
            <h1 className="text-5xl text-white font-semibold">
              Full replacement for OpenAI's platform.
            </h1>
            <p className="w-full lg:w-1/2 mx-auto text-lg text-white/60">
              Cortex has an OpenAI equivalent API. Own your entire stack, and
              deploy your own openai equivalent backend in just a few minutes.
            </p>
            <div className="flex items-center gap-8 xl:gap-10 mt-12">
              <div className="window w-full h-[140px]">
                <div className="title-bar">
                  <div className="title-bar-text text-lg ml-2">API</div>
                </div>
                <div className="window-body text-lg text-left">
                  <p className="mb-0 text-black/60 font-semibold font-sans">
                    compatible endpoints like{" "}
                    <code className="bg-neutral-800 text-white/60">/chat</code>{" "}
                    <code className="bg-neutral-800 text-white/60">
                      /completions
                    </code>
                    ,
                    <code className="bg-neutral-800 text-white/60">
                      /embeddings
                    </code>
                    . No need to learn a new stack.
                  </p>
                </div>
              </div>
              <div className="window w-full h-[140px]">
                <div className="title-bar">
                  <div className="title-bar-text text-lg ml-2">
                    Client Libraries
                  </div>
                </div>
                <div className="window-body text-lg text-left">
                  <p className="mb-0 text-black/60 font-semibold font-sans">
                    Typescript and python libraries. Change 1 line of code to
                    make your app run.
                  </p>
                </div>
              </div>
              <div className="window w-full h-[140px]">
                <div className="title-bar">
                  <div className="title-bar-text text-lg ml-2">CLI</div>
                </div>
                <div className="window-body text-lg text-left">
                  <p className="mb-0 text-black/60 font-semibold font-sans">
                    Docker/Ollama inspired CLI interface for easy local
                    development
                  </p>
                </div>
              </div>
              {/* <div className="relative w-full text-left rounded-xl  text-white bg-neutral-900 dark:border-neutral-800 border-neutral-200 border h-[400px] overflow-hidden">
                <div className="p-8 pb-0">
                  <h3 className="mb-1 font-semibold">API</h3>
                  <p className="mb-0 text-white/60">
                    compatible endpoints like{" "}
                    <code className="bg-neutral-800">/chat</code>{" "}
                    <code className="bg-neutral-800">/completions</code>,
                    <code className="bg-neutral-800">/embeddings</code>. No need
                    to learn a new stack.
                  </p>
                </div>
                <img src="/img/home/api.png" alt="api-illustration" />
              </div> */}
              {/* <div className="w-full text-left rounded-xl  text-white bg-neutral-900 dark:border-neutral-800 border-neutral-200 border h-[400px] overflow-hidden">
                <div className="p-8 pb-0">
                  <h3 className="mb-1 font-semibold">Client Libraries</h3>
                  <p className="mb-0 text-white/60">
                    Typescript and python libraries. Change 1 line of code to
                    make your app run.
                  </p>
                </div>
                <img src="/img/home/client.png" alt="client-illustration" />
              </div> */}
              {/* <div className="w-full text-left rounded-xl  text-white bg-neutral-900 dark:border-neutral-800 border-neutral-200 border h-[400px] overflow-hidden">
                <div className="p-8 pb-0">
                  <h3 className="mb-1 font-semibold">CLI</h3>
                  <p className="mb-0 text-white/60">
                    Docker/Ollama inspired CLI interface for easy local
                    development
                  </p>
                </div>
                <img src="/img/home/cli.png" alt="cli-illustration" />
              </div> */}
            </div>
          </div>
        </div>

        <div className="start-bar">
          <button className="font-bold text-sm flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width={22}
              height={22}
            >
              <polygon
                fill="#ffc400"
                points="32.165,24.613 27.457,35.053 34.67,38.755 39.138,28.503"
              />
              <polygon
                fill="#64dd17"
                points="36.114,14.835 32.165,24.434 38.891,28.503 43.367,18.473"
              />
              <polygon
                fill="#2979ff"
                points="20.213,33.861 24.105,24 30.944,24.362 26.947,34.463"
              />
              <polygon
                fill="#e53935"
                points="29.326,10.775 24.506,22.985 31.16,24 36.114,12.657"
              />
              <path
                fill="#212121"
                d="M45.6,17.8c-2.604-3.471-6.137-5.272-9.508-6.178l-0.015-0.006l-0.001,0.002 c-2.49-0.668-4.883-0.844-6.751-0.842l-1.603,4.06c1.516-0.097,4.083-0.113,6.792,0.53l-3.302,7.924 c-2.442-0.689-4.717-0.832-6.523-0.772l-0.807,2.044c1.678-0.131,4.006-0.098,6.554,0.588l-3.381,8.114 c-1.864-0.466-3.995-0.714-6.377-0.585l-1.373,3.479c9.231-1.369,13.968,4.908,14.175,5.144l2.091,2.439l10.721-25.017L45.6,17.8z M34.253,36.666c-1.255-0.938-3.021-2.016-5.271-2.822l3.359-8.063c1.733,0.682,3.512,1.698,5.21,3.19L34.253,36.666z M38.373,27.053c-1.725-1.423-3.513-2.431-5.261-3.122l3.33-7.992c1.888,0.684,3.737,1.75,5.239,3.394L38.373,27.053z"
              />
              <polygon
                fill="#212121"
                points="24.633,11.021 23.388,14.149 27.171,13.957 28.387,10.894"
              />
              <polygon
                fill="#212121"
                points="23.183,14.702 21.937,17.83 25.694,17.638 26.919,14.574"
              />
              <polygon
                fill="#212121"
                points="21.697,18.383 20.453,21.511 24.216,21.319 25.441,18.255"
              />
              <polygon
                fill="#212121"
                points="20.213,22.064 18.987,25.191 22.747,25 23.963,21.936"
              />
              <polygon
                fill="#212121"
                points="18.779,25.745 17.503,28.872 21.269,28.681 22.495,25.617"
              />
              <polygon
                fill="#212121"
                points="17.246,29.426 16.035,32.553 19.79,32.362 21.034,29.298"
              />
              <polygon
                fill="#212121"
                points="15.809,33.106 14.58,36.234 18.33,36.043 19.556,32.979"
              />
              <polygon
                fill="#212121"
                points="11.62,32.4 10.391,35.528 14.141,35.336 15.384,32.273"
              />
              <polygon
                fill="#2979ff"
                points="13.215,28.762 11.987,31.89 15.619,31.698 16.845,28.634"
              />
              <polygon
                fill="#2979ff"
                points="14.656,25.124 13.412,28.251 17.08,28.06 18.295,24.996"
              />
              <polygon
                fill="#212121"
                points="16.112,21.485 14.849,24.613 18.52,24.422 19.756,21.358"
              />
              <polygon
                fill="#e53935"
                points="17.565,17.847 16.331,20.975 19.99,20.783 21.197,17.719"
              />
              <polygon
                fill="#e53935"
                points="19.023,14.209 17.767,17.336 21.45,17.145 22.665,14.081"
              />
              <polygon
                fill="#212121"
                points="20.453,10.57 19.215,13.698 22.882,13.507 24.107,10.443"
              />
              <polygon
                fill="#212121"
                points="10.491,33.601 11.548,31 8.608,31 7.559,33.601"
              />
              <polygon
                fill="#212121"
                points="14.875,22.672 15.916,20.071 12.969,20.071 11.933,22.672"
              />
              <polygon
                fill="#212121"
                points="19.215,11.743 20.295,9.142 17.34,9.142 16.303,11.743"
              />
              <polygon
                fill="#2979ff"
                points="11.951,29.958 12.992,27.357 10.059,27.357 8.995,29.958"
              />
              <polygon
                fill="#2979ff"
                points="13.412,26.315 14.456,23.714 11.509,23.714 10.482,26.315"
              />
              <polygon
                fill="#e53935"
                points="16.331,19.029 17.371,16.428 14.429,16.428 13.411,19.029"
              />
              <polygon
                fill="#e53935"
                points="17.799,15.386 18.836,12.785 15.898,12.785 14.844,15.386"
              />
              <polygon
                fill="#212121"
                points="4.752,31.989 5.553,29.979 7.947,29.979 7.16,31.989"
              />
              <polygon
                fill="#2979ff"
                points="6.215,28.314 7.026,26.303 9.431,26.303 8.614,28.314"
              />
              <polygon
                fill="#2979ff"
                points="7.689,24.638 8.495,22.628 10.891,22.628 10.086,24.638"
              />
              <polygon
                fill="#212121"
                points="9.157,20.963 9.964,18.952 12.362,18.952 11.563,20.963"
              />
              <polygon
                fill="#212121"
                points="13.564,9.936 14.375,7.926 16.772,7.926 15.967,9.936"
              />
              <polygon
                fill="#e53935"
                points="10.635,17.287 11.437,15.277 13.834,15.277 13.029,17.287"
              />
              <polygon
                fill="#e53935"
                points="12.095,13.612 12.906,11.601 15.306,11.601 14.501,13.612"
              />
              <polygon
                fill="#212121"
                points="3.334,27.521 2.771,29.005 4.35,29.005 4.945,27.521"
              />
              <polygon
                fill="#2979ff"
                points="4.814,23.875 4.213,25.359 5.81,25.359 6.4,23.875"
              />
              <polygon
                fill="#2979ff"
                points="6.268,20.229 5.673,21.713 7.265,21.713 7.864,20.229"
              />
              <polygon
                fill="#212121"
                points="7.728,16.583 7.136,18.067 8.729,18.067 9.32,16.583"
              />
              <polygon
                fill="#e53935"
                points="9.184,12.937 8.596,14.421 10.185,14.421 10.784,12.937"
              />
              <polygon
                fill="#e53935"
                points="10.647,9.291 10.056,10.775 11.649,10.775 12.235,9.291"
              />
              <polygon
                fill="#212121"
                points="12.089,5.677 11.497,7.161 13.086,7.161 13.681,5.677"
              />
              <polygon
                fill="#212121"
                points="0.687,26.72 1.137,25.594 2.489,25.594 2.039,26.72"
              />
              <polygon
                fill="#2979ff"
                points="2.138,23.085 2.59,21.959 3.94,21.959 3.492,23.085"
              />
              <polygon
                fill="#2979ff"
                points="3.593,19.45 4.044,18.323 5.394,18.323 4.945,19.45"
              />
              <polygon
                fill="#212121"
                points="5.044,15.814 5.499,14.688 6.848,14.688 6.397,15.814"
              />
              <polygon
                fill="#e53935"
                points="6.497,12.179 6.954,11.052 8.301,11.052 7.851,12.179"
              />
              <polygon
                fill="#e53935"
                points="7.948,8.543 8.403,7.417 9.752,7.417 9.302,8.543"
              />
              <polygon
                fill="#212121"
                points="9.408,4.908 9.86,3.782 11.161,3.782 10.716,4.908"
              />
            </svg>
            Start
          </button>
          <div className="field-row font-medium">
            Copyright ©{new Date().getFullYear()} Homebrew Computer Company Pte
            Ltd.
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
