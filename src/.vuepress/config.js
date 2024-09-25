const { description } = require("../../package");


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Projetos do Rômulo",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Início",
        link: "/paginas/",
      },
    ],
    sidebar: {
      "/paginas/": [
        {
          title: "Início",
          collapsable: true,
          children: [""],
        },
        {
          title: "Usando Java",
          collapsable: true,
          children: [
            "/paginas/projs-java/projs-java",
            "/paginas/projs-java/projs-spring/projs-spring",
          ],
        },
        {
          title: "Usando Javascript",
          collapsable: true,
          children: ["/paginas/ana-alg-basico/ana-alg-basico"],
        },
        {
          title: "Sobre Banco de Dados",
          collapsable: true,
          children: ["/paginas/ana-alg-basico/ana-alg-basico"],
        },
      ],
    },
  },

  markdown: {
    lineNumbers: false,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    ["@maginapp/katex", { delimiters: "dollars" }],
  ],
};
