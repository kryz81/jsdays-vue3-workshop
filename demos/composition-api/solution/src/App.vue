<template>
  <h3>Work Tracker {{ appVersion }}</h3>
  <div>
    <button class="btn btn-primary" @click="increaseAppVersion">
      Increase application version
    </button>
  </div>
  <InfoBoard :budget="budget" :logged-sum="loggedSum" />
  <ProjectList
    :projects="data.projects"
    @add-day="addDay"
    @remove-day="removeDay"
    @reset-progress="resetProgress"
  />
</template>

<script>
import { computed, reactive, ref, onMounted } from "vue";

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
    const data = reactive({ projects: [] });
    let appVersion = ref(1);

    const loggedSum = computed(() => {
      return data.projects.reduce(
        (total, current) => (total = total + current.loggedDays),
        0
      );
    });

    onMounted(() => {
      data.projects = PROJECTDATA;
    });

    function addDay(projectId) {
      data.projects = data.projects.map((project) => {
        if (projectId === project.id) {
          return { ...project, loggedDays: project.loggedDays + 1 };
        }
        return project;
      });
    }
    function removeDay(projectId) {
      data.projects = data.projects.map((project) => {
        if (projectId === project.id) {
          return { ...project, loggedDays: project.loggedDays - 1 };
        }
        return project;
      });
    }
    function resetProgress(projectId) {
      data.projects = data.projects.map((project) => {
        if (projectId === project.id) {
          return { ...project, loggedDays: 0 };
        }
        return project;
      });
    }

    function increaseAppVersion() {
      appVersion.value = appVersion.value + 1;
    }

    return {
      budget,
      loggedSum,
      data,
      appVersion,
      addDay,
      removeDay,
      resetProgress,
      increaseAppVersion,
    };
  },
};
</script>
