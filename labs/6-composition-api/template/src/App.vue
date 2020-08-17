<template>
  <h3>Work Tracker</h3>
  <InfoBoard :budget="budget" :logged-sum="loggedSum" />
  [project list...]
</template>

<script>
import { projects } from "./projects";
import InfoBoard from "./components/InfoBoard.vue";

export default {
  name: "App",
  components: {
    InfoBoard,
  },
  data() {
    return {
      projects: projects,
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
    addDay(projectId) {
      this.projects = this.projects.map((project) => {
        if (projectId === project.id) {
          return { ...project, loggedDays: project.loggedDays + 1 };
        }
        return project;
      });
    },
    removeDay(projectId) {
      this.projects = this.projects.map((project) => {
        if (projectId === project.id) {
          return { ...project, loggedDays: project.loggedDays - 1 };
        }
        return project;
      });
    },
    resetProgress(projectId) {
      this.projects = this.projects.map((project) => {
        if (projectId === project.id) {
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
