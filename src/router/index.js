import { createRouter, createWebHashHistory } from "vue-router";

import TheHome from "@/views/TheHome.vue";
import TheAbout from "@/views/TheAbout.vue";

const routes = [
  {
    path: "/",
    name: "TheHome",
    component: TheHome
  },
  {
    path: "/about",
    name: "TheAbout",
    component: TheAbout
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;