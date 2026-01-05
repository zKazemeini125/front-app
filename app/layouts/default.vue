<script setup lang="ts">
import { useTheme } from "vuetify";
import { navigationItem } from "~/data";

const { getUser } = useSession();
const user = getUser();
const router = useRouter();
const theme = useTheme();
const themeTitle = ref("light");
const changeTheme = () => {
  if (themeTitle.value == "light") {
    theme.change("dark");
    themeTitle.value = "dark";
  } else if (themeTitle.value == "dark") {
    theme.change("light");
    themeTitle.value = "light";
  }
};

</script>

<template>
  <v-layout>
    <v-app>
      <v-navigation-drawer>
        {{ user?.username }}
        <v-list>
          <template v-for="(item, index) in navigationItem" :key="index">
            <v-list-item link :title="item.title">
              <template #prepend>
                <v-icon icon="item.icon"> </v-icon>
              </template> </v-list-item
          ></template>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar density="compact" :title="user?.username">
        <v-btn @click="changeTheme">{{ themeTitle }}</v-btn>
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
