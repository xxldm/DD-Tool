import { acceptHMRUpdate, defineStore } from "pinia";

const elementPlusLocales: { [key: string]: any } = {
  "en": () => import("element-plus/lib/locale/lang/en"),
  "zh-CN": () => import("element-plus/lib/locale/lang/zh-cn"),
};

export const useLocaleStore = defineStore("my-locale", () => {
  const elLocale = computedAsync(() => elementPlusLocales[useNuxtApp().$i18n.locale.value]());
  return {
    elLocale,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocaleStore, import.meta.hot));
}
