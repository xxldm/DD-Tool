export default defineNuxtConfig({
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
        code: "cn",
        name: "简体中文",
        file: "zh-cn.yaml",
      },
    ],
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
    defaultLocale: "cn",
    vueI18n: {
      fallbackLocale: "cn",
    },
  },
  elementPlus: {
    importStyle: "scss",
  },
  sourcemap: {
    server: true,
    client: false,
  },
  css: [
    "@unocss/reset/tailwind.css",
  ],
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
