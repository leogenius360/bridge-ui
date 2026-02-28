import { defineConfig } from "vitepress";

export default defineConfig({
  title: "BridgeUI",
  description:
    "Semantic component API · Multi-framework support · Optional Tailwind styling",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Guide", link: "/guide/introduction" },
      { text: "Components", link: "/components/button" },
      { text: "GitHub", link: "https://github.com/leogenius360/bridge-ui" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Styling", link: "/guide/styling" },
          { text: "Tokens", link: "/guide/tokens" },
          { text: "Theming", link: "/guide/theming" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Button", link: "/components/button" },
          { text: "Dialog", link: "/components/dialog" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/leogenius360/bridge-ui" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 BridgeUI Contributors",
    },
  },
});
