<script setup lang="ts">
import type cardTableContainerVue from "~/components/cardTableContainer.vue";

const baseUrl = "https://fakestoreapi.com/products";
const tbHeaders = [
  {
    key: "title",
    title: "title",
    nowrap:true,
  },
  {
    key: "price",
    title: "price",
  },
  {
    key: "description",
    title: "description",
  },
  {
    key: "category",
    title: "category",
  },
  {
    key: "image",
    title: "image",
  },
];
</script>
<template>
  <ui-form save-text="New" :visible-list="false" :visible-reset="false">
    <ui-table :url="baseUrl" :header="tbHeaders"></ui-table>
  </ui-form>
</template>
