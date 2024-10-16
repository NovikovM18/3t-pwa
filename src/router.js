import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/3t-pwa",
    name: "main",
    component: () => import("./components/Main.vue")
  },
  {
    path: "/3t-pwa/signin",
    name: "signin",
    component: () => import("./components/auth/SignIn.vue")
  },
  {
    path: "/3t-pwa/signup",
    name: "signup",
    component: () => import("./components/auth/SignUp.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;