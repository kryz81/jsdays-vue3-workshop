<template>
  <h3>Work Tracker</h3>
  <div class="my-4">
    <button class="btn btn-primary" @click="showSummary">Show summary</button>
  </div>
  <InfoModal v-if="data.showInfo" @close="data.showInfo = false">
    <template #title><h3 class="text-primary">Projects Summary</h3></template>
    <template #default
      ><InfoBoard :budget="budget" :logged-sum="loggedSum"
    /></template>
  </InfoModal>
  <ProjectList :projects="data.projects" />
</template>

<script>
import { computed, reactive } from "vue";

import { projects as PROJECTDATA } from "./projects";
import InfoBoard from "./components/InfoBoard.vue";
import ProjectList from "./components/ProjectList.vue";
import InfoModal from "./components/InfoModal.vue";

export default {
  name: "App",
  components: {
    InfoModal,
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
