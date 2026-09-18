import "./styles/styles.less";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";


//import global from "./global";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');

