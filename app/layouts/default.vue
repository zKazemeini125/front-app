<script setup lang="ts">
const router = useRouter();
const f=ref(true)
</script>

<template>
  <v-layout>
    <v-app>
       <v-navigation-drawer>
        <v-list>
          <v-list-item>Shop</v-list-item>
          <v-list-item>Products</v-list-item>
          <v-list-item>Blogs</v-list-item>
          <v-list-item> Settings </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar density="compact" title="username">
        <v-btn
          color="blue"
          class="text-none"
          append-icon="mdi-logout"
          @click="
            () => {
              router.push({ name: 'auth-signIn' });
            }
          "
          >Logout</v-btn
        >
      </v-app-bar>
     <v-main class="d-flex align-center justify-center">
      <slot></slot>
    </v-main>
    </v-app>
  </v-layout>
</template>

<style scoped></style>
