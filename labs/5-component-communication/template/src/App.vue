<template>
  <h3>Work Tracker</h3>
  <InfoBoard />
  <ProjectList />
  <p>
    <button class="btn btn-success" @click="formOpened = !formOpened">
      Add new project
    </button>
  </p>
  <AddProject v-if="formOpened" />
</template>

<script>
import { projects as PROJECTDATA } from "./projects";
import InfoBoard from "./components/InfoBoard.vue";
import AddProject from "./components/AddProject.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  name: "App",
  components: {
    ProjectList,
    AddProject,
    InfoBoard,
  },
  data() {
    return {
      projects: PROJECTDATA,
      budget: 20,
      formOpened: false,
    };
  },
  computed: {
    loggedSum() {
      return this.projects.reduce(
        (total, current) => (total = total + current.loggedDays),
        0
      );
    },
  },
  methods: {
    addDay(projectIndex) {
      this.projects = this.projects.map((project, index) => {
        if (projectIndex === index) {
          return { ...project, loggedDays: project.loggedDays + 1 };
        }
        return project;
      });
    },
    removeDay(projectIndex) {
      this.projects = this.projects.map((project, index) => {
        if (projectIndex === index) {
          return { ...project, loggedDays: project.loggedDays - 1 };
        }
        return project;
      });
    },
    resetProgress(projectIndex) {
      this.projects = this.projects.map((project, index) => {
        if (projectIndex === index) {
          return { ...project, loggedDays: 0 };
        }
        return project;
      });
    },
    saveProject($eventData) {
      const { projectName, category, estimatedDays, highPriority } = $eventData;
      this.projects = [
        ...this.projects,
        { projectName, category, estimatedDays, highPriority, loggedDays: 0 },
      ];
    },
  },
};
</script>
