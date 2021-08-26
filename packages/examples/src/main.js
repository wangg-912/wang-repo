import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Wang from "wang"
import "wang/lib/theme-chalk/"
createApp(App).use(Wang).use(store).use(router).mount("#app");
