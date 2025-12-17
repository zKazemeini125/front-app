<script setup lang="ts">
import type cardTableContainerVue from "~/components/cardTableContainer.vue";
const products = [
  { title: "new clothe", price: "$10", favorit: "3" },
  { title: "1st clothe", price: "$20", favorit: "3" },
  { title: "2nd clothe", price: "$30", favorit: "3" },
  { title: "3rd clothe", price: "$7", favorit: "3" },
  { title: "4th clothe", price: "$17", favorit: "3" },
  { title: "5th clothe", price: "$18", favorit: "3" },
  { title: "6th clothe", price: "$21", favorit: "3" },
  { title: "7th clothe", price: "$4", favorit: "3" },
];
</script>
<template>
  <ui-form save-text="New" :visible-list="false" :visible-reset="false">
    <CardTableContainer :items="products"> </CardTableContainer>
  </ui-form>
</template>
