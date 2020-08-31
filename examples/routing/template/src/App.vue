<template>
  <h3>Project Manager</h3>
  <Menu @open="open" />
  <ProjectList :projects="projects" v-if="currentPage === 'projects'" />
  <Dashboard v-if="currentPage === 'dashboard'" />
  <Users v-if="currentPage === 'users'" />
</template>

<script>
import { ref } from "vue";

import { projects as PROJECTDATA } from "./projects";
import ProjectList from "./components/ProjectList.vue";
import Menu from "./components/Menu.vue";
import Dashboard from "./components/Dashboard.vue";
import Users from "./components/Users.vue";

export default {
  name: "App",
  components: {
    Users,
    Dashboard,
    ProjectList,
    Menu,
  },
  setup() {
    const projects = ref(PROJECTDATA);
    const currentPage = ref("dashboard");

    function open(page) {
      currentPage.value = page;
    }

    return {
      projects,
      currentPage,
      open,
    };
  },
};
</script>
