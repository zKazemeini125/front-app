<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    visibleSave?: boolean;
    visibleReset?: boolean;
    visibleList?: boolean;
    visibleDelete?: boolean;
    saveText?: string;
  }>(),
  {
    visibleSave: true,
    visibleReset: true,
    visibleList: true,
    visibleDelete: true,
    saveText: "Save",
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
            class="rounded-md mr-1 text-none btn-w"
            variant="outlined"
            @click="$emit('save')"
            >{{ saveText }}</v-btn
          >
          <v-btn
            v-if="visibleReset"
            class="rounded-md mr-1 text-none btn-w"
            variant="outlined"
            @click="$emit('reset')"
            >Reset</v-btn
          >
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
