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

import { addProject, deleteProject, getProjects } from "./services/projects";

export default {
  name: "App",
  components: {
    ProjectList,
    AddProject,
    InfoBoard,
  },
  data() {
    return {
      projects: [],
      budget: 20,
      formOpened: false,
    };
  },
  async created() {
    this.projects = await getProjects();
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
    async saveProject($eventData) {
      await addProject({ ...$eventData, loggedDays: 0 });
      this.projects = await getProjects();
    },
    async deleteProject(projectIndex) {
      const found = this.projects.find(
        (project, index) => index === projectIndex
      );
      if (!found) {
        alert("Cannot delete project");
      }
      await deleteProject(found.id);
      this.projects = await getProjects();
    },
  },
};
</script>

<style scoped>
.highPriority {
  background-color: cornsilk;
}
</style>
