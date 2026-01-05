<script setup lang="ts">
import { onMounted } from "vue";

definePageMeta({
  layout: "auth",
});

const router = useRouter();
const api = useApi();
const form = reactive({
  id: 0,
  username: "",
  email: "",
  password: "",
});
const gotoSignin = () => {
  router.push({ name: "auth-signIn" });
};
const submitForm = () => {
  try {
    const res = api.addUser({
      id: form.id,
      username: form.username,
      email: form.email,
      password: form.password,
    });
  } catch (e) {}
};
onMounted(() => {});
</script>

<template>
  <v-card class="mx-auto rounded-xl glass-card" width="500" elevation="3">
    <template #title>
      <div class="d-flex flex-column justify-center align-center">
        <v-sheet
          class="elevation-3 mt-7 d-flex flex-row justify-center align-center"
          rounded="rounded"
          width="40"
          height="40"
        >
          <v-icon icon="mdi-login" x-large></v-icon>
        </v-sheet>
        <span class="text-h5 pt-5">Welcome to your Shop</span>
        <span class="text-body-1">Good choices from a good store</span>
      </div>
    </template>
    <template v-slot:text>
      <v-row class="mx-5 mt-4">
        <v-col cols="12">
          <v-text-field
            autofocus
            label="Username"
            prepend-inner-icon="mdi-account"
            v-model="form.username"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Email"
            prepend-inner-icon="mdi-email"
            v-model="form.email"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Password"
            prepend-inner-icon="mdi-lock"
            v-model="form.password"
          ></v-text-field>
          <div class="d-flex flex-row justify-end">
            <a class="text-body-2 cursor-pointer" @click="gotoSignin"
              >I have an account.</a
            >
          </div>
        </v-col>
        <v-col cols="12">
          <v-btn
            class="border rounded-lg my-8"
            base-color="#000000"
            block
            @click="submitForm"
            >Register</v-btn
          >
        </v-col>
        <!-- <div
          class="d-flex flex-row justify-space-evenly align-center w-100 my-4"
        >
          <div id="divider"></div>
          <span>Or sign in with</span>
          <div id="divider"></div>
        </div> -->
        <!-- <v-col cols="12"
          ><div class="d-flex flex-row justify-space-between">
            <v-btn icon="mdi-google" class="w-33 rounded-xl"></v-btn>
            <v-btn icon="mdi-facebook" class="w-33 rounded-xl"></v-btn>
            <v-btn icon="mdi-apple" class="w-33 rounded-xl"></v-btn>
          </div>
        </v-col> -->
      </v-row>
    </template>
  </v-card>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
#divider {
  width: 37%;
  height: 1px;
  border: dashed rgba(0, 0, 0, 0.244) 1px;
}
.glass-card {
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}
</style>
