<script setup lang="ts">
import type cardTableContainerVue from "~/components/cardTableContainer.vue";

const baseUrl = "https://fakestoreapi.com/products";
const tbHeaders = [
  { key: "title", title: "title", nowrap: true },
  { key: "price", title: "price" },
  { key: "description", title: "description" },
  { key: "category", title: "category" },
  { key: "image", title: "image" },
];
const actions = [
  {
    icon: "delete",
    title: "delete",
    click: (item) => {
      console.log("this action call from prodocts"+item.id);
    },
  },
];
</script>
<template>
  <ui-form save-text="New" :visible-list="false" :visible-reset="false">
    <ui-table :url="baseUrl" :header="tbHeaders" :action="actions"> </ui-table>
  </ui-form>
</template>
<style>
.elipsis {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
}
</style>
