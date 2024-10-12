import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: hopeTheme({
    home: "/",
    logo: "/images/logo.png",
    backToHome: "Voltar ao início",
    darkmode: "toggle",
    author: {
      name: "RFDouro",
      email: "rfdouro@gmail.com",
    },
    plugins: {
      search: true,
      copyCode: {
        locales: {
          "/": {
            copy: "Copia",
            copied: "Copiado",
          },
        },
      },
    },
    pageInfo: false,
    themeColor: true,
    fullscreen: true,
    iconAssets: "iconify",
    metaLocales: {
      author: "Autor",
      date: "Data de escrita",
      origin: "Original",
      views: "Visualizações",
      category: "Categoria",
      tag: "Tag",
      readingTime: "Tempo de leitura",
      words: "Palavras",
      toc: "Nessa página",
      prev: "Anterior",
      next: "Próximo",
      lastUpdated: "Última atualização",
      contributors: "Contribuidores",
      editLink: "Edite esta página",
      print: "Imprimir",
    },
    outlookLocales: {
      themeColor: "Cor do tema",
      darkmode: "Escolha o tema",
      fullscreen: "Tela cheia",
    },
    routeLocales: {
      skipToContent: "Vá para o conteúdo principal",
      notFoundTitle: "Página não encontrada",
      notFoundMsg: [
        "Não tem nada aqui.",
        "Como chegamos aqui?",
        "Isso é um Quatro-O-Quatro.",
        "Parece que temos alguns links quebrados.",
      ],
      back: "Voltar",
      home: "Voltar ao início",
    },
    notFound: [
      "Não tem nada aqui.",
      "Como chegamos aqui?",
      "Isso é um Quatro-O-Quatro.",
      "Parece que temos alguns links quebrados.",
    ],
    sidebar: [
      {
        collapsible: false,
        expanded: true,
        text: "Navegação",
        icon: "ic:outline-list",
        children: [
          {
            text: "Início",
            icon: "ic:round-home",
            link: "/paginas/index.md",
          },
          {
            text: "Projetos",
            icon: "ic:baseline-code",
            link: "/paginas/projetos/",
          },
        ],
      },
      {
        text: "Sobre mim",
        link: "/paginas/sobre.md",
        icon: "ic:baseline-info",
      },
    ],
  }),
  title: "Projetos do Rômulo",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2270%22>💻</text></svg>",
      },
    ],
  ],
});
