<template>
  <Header :theme="theme" @switch-theme="switchTheme" />
  <ProjectList :projects="data.projects" />
</template>

<script>
import { reactive, ref, onMounted, computed } from "vue";

import { projects as PROJECTDATA } from "./projects";
import ProjectList from "./components/ProjectList.vue";
import Header from "./components/Header.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    ProjectList,
  },
  setup() {
    const CONFIG = { theme: "light" }; // from API or a config file
    const store = useStore();
    store.commit("setTheme", CONFIG.theme);

    const data = reactive({ projects: [] });
    onMounted(() => {
      data.projects = PROJECTDATA;
    });

    const theme = computed(() => store.state.theme);

    function switchTheme() {
      const newTheme = theme.value === "light" ? "dark" : "light";
      store.commit("setTheme", newTheme);
    }

    return {
      data,
      theme,
      switchTheme,
    };
  },
};
</script>
