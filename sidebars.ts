import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    {
      type: "html",
      value: "GET STARTED",
      className: "sidebar-divider",
    },
    "overview",
    "quickstart",
    { type: "doc", id: "hardware", label: "Hardware" },
    {
      type: "category",
      label: "Installation",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        { type: "doc", id: "instalation/mac", label: "Mac" },
        { type: "doc", id: "instalation/windows", label: "Windows" },
        { type: "doc", id: "instalation/linux", label: "Linux" },
      ],
    },

    {
      type: "html",
      value: "BASIC USAGE",
      className: "sidebar-divider",
    },

    { type: "doc", id: "command-line", label: "CLI" },
    { type: "doc", id: "ts-library", label: "Typescript Library" },
    { type: "doc", id: "py-library", label: "Python Library" },
    { type: "doc", id: "server", label: "Server Endpoint" },

    {
      type: "html",
      value: "CAPABILITIES",
      className: "sidebar-divider",
    },
    { type: "doc", id: "text-generation", label: "Text Generation" },

    {
      type: "html",
      value: "COMMAND LINE",
      className: "sidebar-divider",
    },
    {
      type: "category",
      label: "Cortex",
      collapsed: true,
      link: { type: "doc", id: "cli/index" },
      items: [
        { type: "doc", id: "cli/init", label: "Cortex Init" },
        { type: "doc", id: "cli/pull", label: "Cortex Pull" },
        { type: "doc", id: "cli/run", label: "Cortex Run" },
        {
          type: "category",
          label: "Cortex Models",
          collapsed: true,
          link: { type: "doc", id: "cli/models/index" },
          items: [
            {
              type: "doc",
              id: "cli/models/download",
              label: "Cortex Models Pull",
            },
            {
              type: "doc",
              id: "cli/models/list",
              label: "Cortex Models List",
            },
            {
              type: "doc",
              id: "cli/models/get",
              label: "Cortex Models Get",
            },
            {
              type: "doc",
              id: "cli/models/update",
              label: "Cortex Models Update",
            },
            {
              type: "doc",
              id: "cli/models/start",
              label: "Cortex Models Start",
            },
            {
              type: "doc",
              id: "cli/models/stop",
              label: "Cortex Models Stop",
            },
            {
              type: "doc",
              id: "cli/models/remove",
              label: "Cortex Models Remove",
            },
          ],
        },
        { type: "doc", id: "cli/ps", label: "Cortex PS" },
        { type: "doc", id: "cli/chat", label: "Cortex Chat" },
        { type: "doc", id: "cli/kill", label: "Cortex Kill" },
        { type: "doc", id: "cli/serve", label: "Cortex Serve" },
      ],
    },

    {
      type: "html",
      value: "ARCHITECTURE",
      className: "sidebar-divider",
    },
    { type: "doc", id: "architecture", label: "Cortex" },
    { type: "doc", id: "cortex-cpp", label: "Cortex.cpp" },
    { type: "doc", id: "cortex-llamacpp", label: "Cortex.llamacpp" },
  ],
};

export default sidebars;
