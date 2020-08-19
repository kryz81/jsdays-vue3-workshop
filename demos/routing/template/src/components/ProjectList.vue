<template>
  <h4>Projects</h4>
  <table class="table table-bordered">
    <tr class="header">
      <td>Project Name</td>
    </tr>
    <tr
      v-for="project in projects"
      :key="project.projectName"
      :class="{ highPriority: project.highPriority }"
    >
      <td>{{ project.projectName }}</td>
    </tr>
  </table>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "ProjectList",
  props: {
    projects: {
      type: Array,
      default: [],
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
</style>
