<template>
  <Header />
  <ProjectList :projects="data.projects" />
</template>

<script>
import { reactive, ref, onMounted, provide, readonly } from "vue";

import { projects as PROJECTDATA } from "./projects";
import ProjectList from "./components/ProjectList.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    ProjectList,
  },
  setup() {
    const CONFIG = { theme: "light" }; // from API or a config file

    const data = reactive({ projects: [] });
    onMounted(() => {
      data.projects = PROJECTDATA;
    });

    return {
      data,
    };
  },
};
</script>
