import { createWebHashHistory, createRouter } from "vue-router";
import { useAuthStore } from "./store/authStore";

const routes =  [
  {
    path: "/auth/signin",
    name: "auth-signin",
    component: () => import("./components/auth/SignIn.vue"),
    meta: {
      requiredAuth: false,
    },
  },
  {
    path: "/auth/signup",
    name: "auth-signup",
    component: () => import("./components/auth/SignUp.vue"),
    meta: {
      requiredAuth: false,
    },
  },
  {
    path: "/",
    name: "main",
    redirect: '/dashboard',
    component: () => import("./components/Main.vue"),
    meta: {
      requiredAuth: true,
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import("./components/main/Dashboard.vue"),
      },
      {
        path: '/tasks',
        name: 'tasks',
        component: () => import("./components/main/Tasks.vue"),
      },
    ],
  },

  {
		path: '/:pathMatch(.*)*',
		name: '404',
		redirect: { name: 'main', params: {} },
    meta: {
      title: '404 ;(',
      requiredAuth: true,
    },
	},

];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = useAuthStore().isLogin;

  if (!to.name.includes('auth') && !isLogin) {
    next({ name: 'auth-signin' });
  } else if (to.name.includes('auth') && isLogin) {
    next({ name: 'main' });
  } else {
    next();
  }

  // document.title = t('tabTitle', { title: t('titles.' + to.meta.title) })
});

export default router;