<template>
  <el-config-provider :locale="localeStore.elLocale?.default">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </el-config-provider>
</template>

<script setup lang="ts">
useHead({
  title: "Vitesse Nuxt 3",
});
const localeStore = useLocaleStore();
</script>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
  font-weight: 400;
}

html.dark {
  background: #222;
  color: white;
}
</style>
