import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage
  },
  {
    name: "About",
    path: "/about",
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;