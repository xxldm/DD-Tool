<template>
  <div>
    {{ t("a") }}
    <client-only>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
    </client-only>
    <language-button />
  </div>
</template>

<script setup>
const { t } = useI18n();
const value1 = ref();
</script>
