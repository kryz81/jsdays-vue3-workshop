<template>
  <h3>Work Tracker</h3>
  <InfoBoard :budget="budget" :logged-sum="loggedSum" />
  <ProjectList
    :projects="projects"
    @add-day="addDay"
    @remove-day="removeDay"
    @reset-progress="resetProgress"
    @delete-project="deleteProject"
  />
  <p>
    <button class="btn btn-success" @click="formOpened = !formOpened">
      Add new project
    </button>
  </p>
  <AddProject v-if="formOpened" @save="saveProject" />
</template>

<script>
import InfoBoard from "./components/InfoBoard.vue";
import AddProject from "./components/AddProject.vue";
import ProjectList from "./components/ProjectList.vue";
import { projects } from "./projects";

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
    deleteProject(projectId) {
      this.projects = this.projects.filter(
        (project) => project.id !== projectId
      );
    },
  },
};
</script>
