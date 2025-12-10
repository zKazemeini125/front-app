<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("qwertyuiop");
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field label="Username" v-model=""></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
div {
  color: blue;
  font-size: 20px;
}
</style>
