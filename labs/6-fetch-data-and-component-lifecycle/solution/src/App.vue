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

import {
  addProject,
  deleteProject,
  getProjects,
  updateProject,
} from "./services/projects";

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
    async getProjects() {
      this.projects = await getProjects();
    },
    async addDay(projectId) {
      const project = this.getProjectById(projectId);
      const projectDataToSave = {
        ...project,
        loggedDays: project.loggedDays + 1,
      };
      await updateProject(projectId, projectDataToSave);
      this.getProjects();
    },
    async removeDay(projectId) {
      const project = this.getProjectById(projectId);
      const projectDataToSave = {
        ...project,
        loggedDays: project.loggedDays - 1,
      };
      await updateProject(projectId, projectDataToSave);
      this.getProjects();
    },
    async resetProgress(projectId) {
      const project = this.getProjectById(projectId);
      const projectDataToSave = {
        ...project,
        loggedDays: 0,
      };
      await updateProject(projectId, projectDataToSave);
      this.getProjects();
    },
    async saveProject($eventData) {
      await addProject({ ...$eventData, loggedDays: 0 });
      this.getProjects();
    },
    async deleteProject(projectId) {
      await deleteProject(projectId);
      this.getProjects();
    },
    getProjectById(projectId) {
      return this.projects.find((project) => project.id === projectId);
    },
  },
};
</script>
