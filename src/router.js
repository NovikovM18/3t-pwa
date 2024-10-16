import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    name: "main",
    component: () => import("./components/Main.vue")
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("./components/auth/SignIn.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("./components/auth/SignUp.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;