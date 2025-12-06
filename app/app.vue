<script lang="ts">
  const { locales, setLocale } = useI18n()
</script>

<template>
  <button v-for="locale in locales" @click="setLocale(locale.code)">
    {{ locale.name }}
  </button>
  <NuxtPage/>
</template>


<style>
</style>
