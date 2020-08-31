import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import ProjectList from "./components/ProjectList.vue";
import Users from "./components/Users.vue";
import ProjectDetails from "./components/ProjectDetails.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/projects",
    component: ProjectList,
    children: [
      {
        path: ":projectId",
        component: ProjectDetails,
      },
    ],
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
