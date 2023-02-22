export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: "DD-Tool",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/bison.png" },
      ],
    },
  },
  modules: [
    "@element-plus/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@unocss/nuxt",
    "@vue-macros/nuxt",
    "@vueuse/nuxt",
    "nuxt-typed-router",
    "nuxt-vitest",
  ],
  experimental: {
    inlineSSRStyles: false,
    reactivityTransform: true,
    payloadExtraction: false,
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.yaml",
      },
      {
        code: "zh-CN",
        name: "简体中文",
        file: "zh-CN.yaml",
      },
    ],
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
    defaultLocale: "zh-CN",
    vueI18n: {
      fallbackLocale: "zh-CN",
    },
  },
  elementPlus: {
    importStyle: "scss",
    themes: ["dark"],
  },
  sourcemap: {
    server: true,
    client: false,
  },
  css: [
    "@unocss/reset/normalize.css",
    "~/assets/style/medium.scss",
    "~/assets/style/regular.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use \"~/assets/style/element-variables.scss\" as element;",
        },
      },
    },
  },
  colorMode: {
    classSuffix: "",
  },
  typescript: {
    shim: false,
  },
  devServer: {
    port: 8080,
  },
});
