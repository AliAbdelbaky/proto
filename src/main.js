import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "animate.css";
import "./sass/main.sass";

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");