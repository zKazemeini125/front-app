<script setup lang="ts">
    const props=defineProps({
        items:{
            type:Array,
        }
    })
</script>

<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col md="3" class="d-flex align-center">
        <v-btn class="rounded-lg mr-3" size="34" icon="mdi-refresh"></v-btn>
        <v-text-field class="" density="compact">
          <template #append-inner>
            <v-icon icon="mdi-magnify" @click="$emit('search')"></v-icon>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
        <v-col md=3 v-for="card in items">
            <ProdCard></ProdCard>
        </v-col>
    </v-row>
  </v-container>
</template>
<style>

</style>
