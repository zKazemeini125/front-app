<script lang="ts" setup>
const api = useApi();
interface Header {
  key: string;
  title: string;
  nowrap?: boolean;
  sortable?: boolean;
  type?: string;
}
interface tableProps {
  url?: string;
  action?: [{ name: string; onClick: "$emit(click)" }];
  header: Header[];
  items: any[];
  search: string;
}
const urlItems = ref<any>([]);
const props = defineProps<tableProps>();
const selected = ref<number[]>();
const expandedRow = ref();

onMounted(async () => {
  if (props.url !== undefined) {
    const fetchData = await $fetch(props.url);
    urlItems.value = fetchData;
  }
});
</script>

<template>
  <div>
    <v-row class="mt-5">
      <v-col md="4" class="d-flex align-center">
        <v-btn class="rounded-lg mr-3" size="34" icon="mdi-refresh"></v-btn>
        <v-text-field class="" density="compact">
          <template #append-inner>
            <v-icon icon="mdi-magnify" @click="$emit('search')"></v-icon>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        :items="props.url ? urlItems : props.items"
        :headers="props.header"
        item-value="id"
        show-select
        v-model="selected"
        class="customTable"
        :search="props.search"
      >
        <template #item.image="{ item }">
          <v-image
            elevation="4"
            :src="item.image"
            width="30"
            hight="30"
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
        <thead>
          <tr v-if="action !== null">
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="action !== null">
            <td>
              <div class="d-flex flex-row justify-centr align-center">
                <v-btn
                  v-if="props.action.name === 'edit'"
                  icon="mdi-pencil"
                ></v-btn>
              </div>
            </td>
          </tr>
        </tbody> </v-data-table
    ></v-row>
  </div>
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
