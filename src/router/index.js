import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import Registro from "../views/Registro.vue";
import Actividades from "../views/Actividades.vue";
import Cursos from "../views/Cursos.vue";
import UserProfile from "../views/UserProfile.vue";
import LoginLayout from "@/components/layout/LoginLayout.vue";
import ActividadLayout from "@/components/layout/ActividadLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    component: LoginLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/registro",
        name: "Registro",
        component: Registro,
      },
    ],
  },
  {
    path: "/",
    redirect: "/actividad",
    component: ActividadLayout,
    children: [
      {
        path: "/actividad",
        name: "Actividades",
        component: Actividades,
      },
      {
        path: "/curso",
        name: "Cursos",
        component: Cursos,
      },
    ],
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: UserProfile,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
