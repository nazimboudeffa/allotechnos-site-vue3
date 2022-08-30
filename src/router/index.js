import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import AboutPage from "@/views/ContactPage.vue";

const routes = [
  {
    name: "Accueil",
    path: "/",
    component: HomePage
  },
  {
    name: "Produits",
    path: "/products",
    component: ProductsPage
  },
  {
    name: "Contact",
    path: "/contact",
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;