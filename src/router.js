import { createWebHistory, createRouter } from "vue-router";
import { useAuthStore } from "./store/authStore";

const routes =  [
  {
    path: "/auth/signin",
    name: "signin",
    component: () => import("./components/auth/SignIn.vue"),
    meta: {
      requiredAuth: false,
    },
  },
  {
    path: "/auth/signup",
    name: "signup",
    component: () => import("./components/auth/SignUp.vue"),
    meta: {
      requiredAuth: false,
    },
  },


  {
    path: "/",
    name: "main",
    component: () => import("./components/Main.vue"),
    meta: {
      requiredAuth: true,
    },
  },

  {
		path: '/:pathMatch(.*)*',
		name: '404',
		redirect: { name: 'Courses', params: {} },
    meta: {
      title: '404 ;(',
      requiredAuth: true,
    },
	},

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // if (to.name === 'Signup' && from.name !== 'Stripe Redirection' && from.name !== undefined) {
  //   next({ name: 'Login' });
  // }

  // else if (to.meta.requiredAuth && !authStore.isLoggedIn) {
  //   next({ name: 'Login' });
  // }

  // else if ((to.name === 'Login' || to.name === 'Signup') && authStore.isLoggedIn) {
  //   next({ name: 'Courses' });
  // }

  // else {
  // }
  next();

  // document.title = t('tabTitle', { title: t('titles.' + to.meta.title) })
});

export default router;