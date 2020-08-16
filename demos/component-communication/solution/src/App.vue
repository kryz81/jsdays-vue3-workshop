<template>
  <h3>Work Tracker</h3>
  <InfoBoard :budget="budget" :logged-sum="loggedSum" />
  <ProjectList
    :projects="projects"
    @add-day="addDay"
    @remove-day="removeDay"
    @reset-progress="resetProgress"
  />
  <p>
    <button class="btn btn-success" @click="formOpened = !formOpened">
      Add new project
    </button>
  </p>
  <AddProject v-if="formOpened" @save="saveProject" />
</template>

<script>
import { projects } from "./projects";
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

<style scoped>
.highPriority {
  background-color: cornsilk;
}
</style>
