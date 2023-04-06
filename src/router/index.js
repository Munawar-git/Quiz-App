import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/Add.vue";
import Delete from "../views/Delete.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add",
    name: "add",
    component: Add,
  },
  {
    path: "/delete",
    name: "delete",
    component: Delete,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
