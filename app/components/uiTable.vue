<script lang="ts" setup>
const api = useApi();
interface Header {
  key: string;
  title: string;
  nowrap?: boolean;
  sortable?: boolean;
  type?: string;
}
interface Action {
  icon: string;
  title: string;
  click?: (item: unknown, index: number) => void;
}
interface tableProps {
  url?: string;
  action?: Action[];
  header: Header[];
  items: any[];
  search?: string;
}
const urlItems = ref<any>([]);
const props = defineProps<tableProps>();
const selected = ref<number[]>();
const actionsHeaders = computed<Header[]>(() => [
  { key: "actions", title: "actions" },
]);

onMounted(async () => {
  if (props.url !== undefined) {
    const fetchData = await $fetch(props.url);
    urlItems.value = fetchData;
  }
});
</script>

<template>
  <div>
    <v-row>
      <v-data-table
        :items="props.url ? urlItems : props.items"
        :headers="
          !!props.action && !!props.header
            ? props.header.concat(actionsHeaders)
            : props.header
        "
        item-value="id"
        show-select
        v-model="selected"
        class="customTable"
        :search="props.search"
      >
        <template #item.image="{ item }">
          <v-img
            elevation="4"
            :src="item.image"
            width="50"
            height="50"
            cover
            class="rounded"
          />
        </template>
        <template #item.description="{ item }">
          <span class="elipsis">
            {{ item.description }}
          </span>
        </template>
        <template #item.title="{ item }">
          <span class="elipsis">{{ item.title }}</span>
        </template>
        <template #item.actions="{item}">
          <div class="d-flex flex-row justify-centr align-center">
            <v-icon
              v-for="(action, index) in props.action"
              :key="index"
              :color="action.color"
              :title="action.title"
              class="cursor-pointer"
              :disabled="action.disabled == true"
              :icon="'mdi-' + action.icon"
              size="small"
              @click="action.click?.(item, index)"
            />
          </div>
        </template> </v-data-table
    ></v-row>
  </div>
</template>

<style>
.elipsis {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
}
</style>
