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
        <v-col md=3 v-for="card in items">
            <ProdCard></ProdCard>
        </v-col>
    </v-row>
  </v-container>
</template>
<style>

</style>
