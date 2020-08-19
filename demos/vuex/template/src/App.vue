<template>
  <Header :theme="theme" @switch-theme="switchTheme" />
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

    const theme = ref(CONFIG.theme);

    provide("theme", readonly(theme));

    const data = reactive({ projects: [] });
    onMounted(() => {
      data.projects = PROJECTDATA;
    });

    function switchTheme() {
      if (theme.value === "light") {
        theme.value = "dark";
      } else {
        theme.value = "light";
      }
    }

    return {
      data,
      theme,
      switchTheme,
    };
  },
};
</script>
