import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { ScalarOptions } from "@scalar/docusaurus";

import { remarkCodeHike } from "@code-hike/mdx";

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

const dateArray = generateDates("06-21-2024", 30);

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
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
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
              results.push({ date: date, ...data });
            } catch (error) {
              results.push({ date: date });
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
        src: "img/logos/cortex-logo.svg",
        srcDark: "img/logos/cortex-logo-dark.svg",
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
        // {
        //   type: "doc",
        //   position: "right",
        //   docId: "changelog",
        //   label: "Changelog",
        // },
        // {
        //   type: "doc",
        //   position: "right",
        //   docId: "about",
        //   label: "About",
        // },
        {
          href: "https://discord.gg/FTk2MvZwJH",
          position: "right",
          className: "header-discord-link",
          "aria-label": "Discord",
        },
        {
          href: "https://github.com/janhq/cortex",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Tutorial",
      //         to: "/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Homebrew Computer Company Pte Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
