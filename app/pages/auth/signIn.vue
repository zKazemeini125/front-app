<script setup lang="ts">
import { onMounted } from "vue";
import "~/data";
import { loginUser, type CreateUserDto } from "~/data";
definePageMeta({
  layout: "auth",
});
const router = useRouter();
const gotoRegister = () => {
  router.push({ name: "auth-register" });
};
const showPassword = ref(false);
const changePasswordState = () => {
  showPassword.value = !showPassword.value;
};
const form = reactive<CreateUserDto>({ username: "", password: "" });
const submit = () => {
  const userLogedin = loginUser(form.username, form.password);
  console.log('qqqqqqq');
  
  if (userLogedin) {
    router.push({ name: "products" });
  }
};
onMounted(() => {});
</script>

<template>
  <v-card class="mx-auto rounded-xl glass-card" width="500" elevation="3">
    <template #title>
      <div class="d-flex flex-column justify-center align-center">
        <v-sheet
          class="elevation-0 mt-7 d-flex flex-row justify-center align-center"
          rounded="rounded"
          width="40"
          height="40"
        >
          <v-icon icon="mdi-login" x-large></v-icon>
        </v-sheet>
        <span class="text-h5 pt-5">Sing in with password</span>
        <span class="text-body-1">Good choices from a good store</span>
      </div>
    </template>
    <template v-slot:text>
      <!--!template #text-->
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
            label="Password"
            prepend-inner-icon="mdi-lock"
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
          >
            <template #append-inner>
              <v-icon @click="changePasswordState">{{
                showPassword ? "mdi-eye-off" : "mdi-eye"
              }}</v-icon>
            </template></v-text-field
          >
        </v-col>
        <v-col>
          <div class="d-flex flex-row">
            <v-hover v-slot="{ isHovering, props }">
              <v-icon>{{
                isHovering ? "mdi-check-circle" : "mdi-circle-outline"
              }}</v-icon>
              <a
                v-bind="props"
                class="text-body-1 cursor-pointer"
                @click="gotoRegister"
                >I don't have an account.</a
              >
            </v-hover>
          </div>
        </v-col>

        <v-col cols="12">
          <v-btn
            class="border rounded-lg my-8 bg-info pa-5"
            @click="submit"
            block
            >Get Started</v-btn
          >
        </v-col>
        <!-- <div
          class="d-flex flex-row justify-space-evenly align-center w-100 my-4"
        >
          <div id="divider"></div>
          <span>Or sign in with</span>
          <div id="divider"></div>
        </div>
        <v-col cols="12"
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
