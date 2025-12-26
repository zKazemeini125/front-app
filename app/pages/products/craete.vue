<script setup lang="ts">
const form = reactive({
  id: 0,
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
});
</script>
<template>
  <ui-form>
    <v-row>
      <v-col>
        <v-text-field v-model="form.title"/>
      </v-col>
      <v-col>
        <v-text-field v-model="form.price"></v-text-field>
      </v-col>
    </v-row>
  </ui-form>
</template>
<style></style>
