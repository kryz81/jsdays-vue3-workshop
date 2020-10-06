<template>
  <h3>Work Tracker</h3>
  <table class="table table-bordered">
    <tr class="header">
      <td>Project Name</td>
      <td>Category</td>
      <td>High priority</td>
      <td>Estimated Days</td>
      <td>Logged Days</td>
    </tr>
    <tr
      v-for="(project, index) in projects"
      :key="project.projectName"
      :class="{ highPriority: project.highPriority }"
    >
      <td>{{ project.projectName }}</td>
      <td>{{ project.category }}</td>
      <td>
        {{ project.highPriority ? "yes" : "no" }}
      </td>
      <td>{{ project.estimatedDays }}</td>
      <td>
        {{ project.loggedDays }}
      </td>
    </tr>
  </table>
  <form>[form]</form>
</template>

<script>
import { projects } from "./projects";

export default {
  name: "App",
  data() {
    return {
      projects: projects,
      budget: 20,
      projectCategories: [
        "Client Project",
        "Internal Project",
        "Proof of Concept",
      ],
    };
  },
};
</script>

<style scoped>
.header {
  font-weight: bold;
  background-color: #f5f5f5;
}

form {
  margin: 25px 0;
  padding: 25px;
  background-color: #f5f5f5;
  width: 50%;
}
</style>
