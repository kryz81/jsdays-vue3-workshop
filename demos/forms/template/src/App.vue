<template>
  <h3>Work Tracker</h3>
  <h5>Budget: {{ budget }} days, logged days: {{ loggedSum }}</h5>
  <p v-show="loggedSum >= budget">
    <span class="badge badge-warning">Out of money</span>
  </p>
  <table class="table table-bordered">
    <tr class="header">
      <td>Project Name</td>
      <td>Estimated Days</td>
      <td>Logged Days</td>
      <td>Actions</td>
    </tr>
    <tr
      v-for="(project, index) in projects"
      :key="project.projectName"
      :class="{ highPriority: project.highPriority }"
    >
      <td>{{ project.projectName }}</td>
      <td>{{ project.estimatedDays }}</td>
      <td
        class="estimatedDays"
        :class="{ 'text-danger': project.loggedDays > project.estimatedDays }"
      >
        {{ project.loggedDays }}
      </td>
      <td :style="actions">
        <button class="btn btn-primary btn-sm mr-3" @click="addDay(index)">
          Add 1 day
        </button>
        <button
          class="btn btn-primary btn-sm mr-3"
          :disabled="project.loggedDays === 0"
          @click="removeDay(index)"
        >
          Remove 1 day
        </button>
        <button
          class="btn btn-danger btn-sm"
          :disabled="project.loggedDays === 0"
          @click="resetProgress(index)"
        >
          Reset logged days
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import { projects } from "./projects";

export default {
  name: "App",
  data() {
    return {
      projects: projects,
      budget: 20,
      actions: {
        backgroundColor: "#f9f9f9",
      },
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
  },
};
</script>

<style scoped>
.header {
  font-weight: bold;
  background-color: #f5f5f5;
}

.estimatedDays {
  font-weight: bold;
  color: green;
}

.highPriority {
  background-color: cornsilk;
}
</style>
