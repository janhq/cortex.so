import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import { remarkCodeHike } from "@code-hike/mdx";

const config: Config = {
  title: "Cortex",
  titleDelimiter: "-",
  tagline:
    "Cortex is an openAI-compatible local AI server that developers can use to build LLM apps. It is packaged with a Docker-inspired command-line interface and a Typescript client library. It can be used as a standalone server, or imported as a library.",
  favicon: "img/favicon.ico",

  plugins: [
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
  ],

  // Set the production url of your site here
  url: "https://cortex.jan.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  themes: ["live-codeblock"],

  markdown: {
    format: "detect",
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
            [remarkCodeHike, { theme: "github-dark", showCopyButton: true }],
          ],
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/janhq/cortex/",
        },
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            "./src/css/custom.css",
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
          logo: "https://cortex.jan.ai/img/logos/Meta-Open-Source.svg",
        }),
      },
    ],

    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Cortex",
      logo: {
        alt: "Cortex Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "introduction",
          label: "Documentation",
        },
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
