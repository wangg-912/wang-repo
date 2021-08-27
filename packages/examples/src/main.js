import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Wang from "wangui"
import "wangui/lib/theme-chalk/"
createApp(App).use(Wang).use(store).use(router).mount("#app");
