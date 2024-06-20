import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { ScalarOptions } from "@scalar/docusaurus";
import { downloadFile, listModels, listFiles } from "@huggingface/hub";
import { remarkCodeHike } from "@code-hike/mdx";

const date = new Date();

const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const year = date.getFullYear();

const formattedDate = `${month}-${day}-${year}`;

async function fetchDataDaily(date: string) {
  const response = await fetch(
    `https://delta.jan.ai/openai-api-collection-test/${date}.json`
  );
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
}

function generateDates(startDate: string, numberOfDays: number): string[] {
  const dates: string[] = [];
  const start = new Date(startDate);

  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() - i);
    const formattedDate = `${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date
      .getDate()
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
    dates.push(formattedDate);
  }

  return dates;
}

// disbale this one for avoid date 19,20 may
const dateArray = generateDates(formattedDate, 30);
// const dateArray = generateDates("06-21-2024", 30);

const config: Config = {
  title: "Cortex",
  titleDelimiter: "-",
  tagline:
    "Cortex is an openAI-compatible local AI server that developers can use to build LLM apps. It is packaged with a Docker-inspired command-line interface and a Typescript client library. It can be used as a standalone server, or imported as a library.",
  favicon: "img/favicons/favicon.ico",
  staticDirectories: ["static"],

  plugins: [
    "docusaurus-plugin-sass",
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    async function modelsPagesGenPlugin(context, options) {
      return {
        name: "list-models",
        async contentLoaded({ content, actions }) {
          const { setGlobalData } = actions;
          try {
            const fetchedModels = [];
            for await (const model of listModels({
              search: { owner: "cortexhub" },
            })) {
              try {
                const files = [];
                let readmeContent = "README.md not available";
                for await (const fileInfo of listFiles({
                  repo: "cortexhub/llama3",
                })) {
                  files.push(fileInfo);
                  if (fileInfo.path === "README.md") {
                    const response = await downloadFile({
                      repo: model.name,
                      path: "README.md",
                    });
                    if (response && response.text) {
                      readmeContent = await response.text();
                    }
                  }
                }
                fetchedModels.push({ ...model, files, readmeContent });
              } catch (error) {
                console.error("Error fetching files:", error);
                fetchedModels.push({
                  ...model,
                  files: [],
                  readmeContent: "Error fetching README.md",
                  error: "Error fetching files",
                });
              }
            }
            setGlobalData(fetchedModels);
            await Promise.all(
              fetchedModels.map(async (page) => {
                return actions.addRoute({
                  // this is the path slug
                  // you can make it dynamic here
                  path: `/model/${page.name.replace("cortexhub/", "")}`,
                  // the page component used to render the page
                  component: require.resolve(
                    "./src/components/MyModelPage/index.tsx"
                  ),
                  // will only match for exactly matching paths
                  exact: true,
                  // you can use this to optionally overwrite certain theme components
                  // see here: https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-plugin-content-blog/src/index.ts#L343
                  modules: {},
                  // any extra custom data keys are passed to the page
                  // in this case, we merge the page data together with the loaded content data
                  customData: { ...page },
                });
              })
            );
          } catch (error) {
            console.error("Error fetching models:", error);
          }
        },
      };
    },
    async function getRepoInfo(context, options) {
      return {
        name: "repo-info",
        async contentLoaded({ content, actions }) {
          const { setGlobalData } = actions;
          const fetchRepoInfo = await fetch(
            "https://api.github.com/repos/janhq/cortex"
          );
          const repoInfo = await fetchRepoInfo.json();
          setGlobalData(repoInfo);
        },
      };
    },
    async function getDataOAITotalCoverage(context, options) {
      return {
        name: "oai-total-coverage",
        async contentLoaded({ content, actions }) {
          const { setGlobalData } = actions;
          const fetchTotalCoverage = await fetch(
            "https://delta.jan.ai/openai-api-collection-test/total-coverage.json"
          );
          const totalCoverage = await fetchTotalCoverage.json();
          setGlobalData(totalCoverage);
        },
      };
    },
    async function getDataOAIDaily(context, options) {
      return {
        name: "oai-daily-report",
        async contentLoaded({ content, actions }) {
          const { setGlobalData } = actions;

          let results = [];
          for (let date of dateArray) {
            try {
              let data = await fetchDataDaily(date);
              results.push({ date: date, ...data } as never);
            } catch (error) {
              results.push({ date: date } as never);
            }
          }

          setGlobalData(results as []);
        },
      };
    },
    [
      "@scalar/docusaurus",
      {
        label: "API Reference",
        route: "/api-reference",
        configuration: {
          spec: {
            url: "https://raw.githubusercontent.com/janhq/cortex-web/main/static/openapi/jan.json",
          },
          hideModels: true,
        },
      } as ScalarOptions,
    ],
  ],

  // Set the production url of your site here
  url: "https://cortex.jan.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  themes: ["live-codeblock", "@docusaurus/theme-mermaid"],

  markdown: {
    format: "detect",
    mermaid: true,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "janhq", // Usually your GitHub org/user name.
  projectName: "cortex", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          beforeDefaultRemarkPlugins: [
            [
              remarkCodeHike,
              {
                theme: "dark-plus",
                showCopyButton: true,
                skipLanguages: ["mermaid"],
              },
            ],
          ],
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/janhq/cortex-web/tree/main/",
        },
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            "./src/styles/main.scss",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || "XXX",
      apiKey: process.env.ALGOLIA_API_KEY || "XXX",
      indexName: "cortex_docs",
      contextualSearch: true,
      insights: true,
    },

    metadata: [
      {
        name: "description",
        content:
          "Cortex is an openAI-compatible local AI server that developers can use to build LLM apps. It is packaged with a Docker-inspired command-line interface and a Typescript client library. It can be used as a standalone server, or imported as a library.",
      },
    ],

    headTags: [
      // Declare some json-ld structured data
      {
        tagName: "script",
        attributes: {
          type: "application/ld+json",
        },
        innerHTML: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Organization",
          name: "Cortex",
          url: "https://cortex.jan.ai/",
          logo: "https://cortex.jan.ai/img/logos/cortex-logo.svg",
        }),
      },
    ],

    image: "img/cortex-social-card.png",
    navbar: {
      logo: {
        alt: "Cortex Logo",
        src: "/img/logos/cortex-logo.svg",
        srcDark: "/img/logos/cortex-logo-dark.svg",
        width: 116,
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "overview",
          label: "Documentation",
        },
        { to: "docs/cli", label: "CLI Reference", position: "left" },
        {
          type: "custom-socialNavbar",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Cortex",
          items: [
            {
              label: "Documentation",
              to: "/docs",
            },
            {
              label: "Changelog",
              to: "/",
            },
            {
              label: "Blog",
              to: "/",
            },
          ],
        },
        {
          title: "Getting Started",
          items: [
            {
              label: "Replace OpenAI",
              to: "/",
            },
            {
              label: "Models",
              to: "/",
            },
            {
              label: "Integration",
              to: "/",
            },
            {
              label: "Benchmarks",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://x.com/janframework",
            },
            {
              label: "linkedin",
              href: "https://www.linkedin.com/company/janframework/",
            },
          ],
        },
        {
          title: "Product",
          items: [
            {
              label: "Jan",
              href: "https://jan.ai/",
            },
            {
              label: "Cortex",
              to: "/",
            },
            {
              label: "Homebrew",
              href: "https://www.homebrew.ltd/",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              to: "/",
            },
            {
              label: "Vision",
              to: "/",
            },
            {
              label: "Newsletter",
              to: "/",
            },
            {
              label: "Careers",
              to: "/",
            },
          ],
        },
      ],
      logo: {
        alt: "Cortex Logo",
        src: "/img/logos/cortex-logo-mark.svg",
        srcDark: "/img/logos/cortex-logo-mark.svg",
        width: 34,
      },
      copyright: `©${new Date().getFullYear()} Homebrew Computer Company`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
