<template>
  <Header />
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
