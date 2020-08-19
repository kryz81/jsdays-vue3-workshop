<template>
  <h3>Work Tracker</h3>
  <InfoBoard :budget="budget" :logged-sum="loggedSum" />
  <ProjectList :projects="data.projects" />
</template>

<script>
import { computed, reactive } from "vue";

import { projects as PROJECTDATA } from "./projects";
import InfoBoard from "./components/InfoBoard.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  name: "App",
  components: {
    ProjectList,
    InfoBoard,
  },
  setup() {
    const budget = 20;
    const data = reactive({ projects: PROJECTDATA, showInfo: false });
    const loggedSum = computed(() => {
      return data.projects.reduce(
        (total, current) => (total = total + current.loggedDays),
        0
      );
    });
    function showSummary() {
      data.showInfo = true;
    }

    return {
      budget,
      loggedSum,
      data,
      showSummary,
    };
  },
};
</script>
