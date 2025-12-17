// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import { VIconBtn } from "vuetify/labs/VIconBtn";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults: {
      VTextField: {
        variant: "outlined",
        density: "compact",
        hideDetails: "auto",
      },
      VBtn: {
        variant: "outlined",
        density: "compact",
        hideDetails: "auto",
      },
    },
    theme: {
      defaultTheme: "light", // 'light' | 'dark' | 'system'
    },
    components: {
      VIconBtn,
    },
  });
  app.vueApp.use(vuetify);
});
