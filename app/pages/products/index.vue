<script setup lang="ts">
  const app=useApp()
const router = useRouter();
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
    color: "#ff1122",
    click: (item) => {
      console.log("delete");
    },
  },
  {
    icon: "pen",
    title: "edit",
    color: "info",
    click: (item) => {
      gotoForm(item)
    },
  },
];
const gotoForm=(item:any)=>{  
  if(!Number(item?.id))
    router.push({name:'products-craete'}) 
  else
  router.push({name:'products-id', params:{id: item.id}})

}
</script>
<template>
  <ui-form :visible-list="false" :visible-delete="false" :visible-save="false" @new="gotoForm" >
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
