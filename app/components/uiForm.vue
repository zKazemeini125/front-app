<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    visibleSave?: boolean;
    visibleReset?: boolean;
    visibleList?: boolean;
    visibleDelete?: boolean;
    visibleNew?:boolean;
    saveText?: string;
  }>(),
  {
    visibleSave: true,
    visibleReset: true,
    visibleList: true,
    visibleDelete: true,
    visibleNew:true,
  }
);
</script>
<template>
  <v-container fluid class="h-100">
    <v-form>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row justify-start align-start my-3">
          <v-btn
            v-if="visibleSave"
            class="rounded-lg mr-1 text-none icon-w"
            icon="mdi-content-save"
            variant="outlined"
            @click="$emit('save')"
          ></v-btn>
          <v-btn
            v-if="visibleReset"
            class="rounded-lg mr-1 text-none icon-w"
            icon="mdi-refresh"
            variant="outlined"
            @click="$emit('reset')"
          ></v-btn>
          <v-btn
            v-if="visibleList"
            class="rounded-lg mr-1 icon-w"
            icon="mdi-format-list-bulleted"
            variant="outlined"
            @click="$emit('list')"
          ></v-btn>
          <v-btn
            v-if="visibleDelete"
            icon="mdi-delete"
            class="rounded-lg mr-1 icon-w"
            variant="outlined"
            @click="$emit('delete')"
          ></v-btn>
          <v-btn
            v-if="visibleNew"
            icon="mdi-plus-thick"
            class="rounded-lg mr-1 icon-w"
            variant="outlined"
            @click="$emit('new')"
          ></v-btn>
        </div>
        <slot></slot>
      </div>
    </v-form>
  </v-container>
</template>
<style>
.icon-w {
  height: 28px !important;
  padding-left: 0.8rem !important;
  padding-right: 0.8rem !important ;
  width: max-content !important;
}
.btn-w {
  height: 28px !important;
  width: max-content !important;
}
</style>
