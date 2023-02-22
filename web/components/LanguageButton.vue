<template>
  <client-only>
    <el-dropdown @command="click">
      <el-button
        circle
        size="large"
      >
        <span
          i-carbon-translate
          text-2xl
        />
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="locale in myLocales"
            :key="locale.code"
            :command="locale.code"
            :disabled="disabled(locale.code)"
          >
            {{ locale.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </client-only>
</template>

<script lang="ts" setup>
import type { LocaleObject } from "vue-i18n-routing";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();

const myLocales = locales.value.map((l) => {
  if (typeof l === "object") {
    return l;
  }
  return { code: l, name: l } as LocaleObject;
});
const disabled = (code: string) => locale.value === code;
const click = (code: string) => router.push(switchLocalePath(code));
</script>
