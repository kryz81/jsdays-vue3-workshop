<template>
  <h4>Projects</h4>
  <table class="table table-bordered">
    <tr class="header">
      <td>Project Name</td>
      <td>Actions</td>
    </tr>
    <tr
      v-for="project in projects"
      :key="project.projectName"
      :class="{ highPriority: project.highPriority }"
    >
      <td>{{ project.projectName }}</td>
      <td>
        <router-link :to="`/projects/${project.id}`">Show details</router-link>
      </td>
    </tr>
  </table>
  <router-view />
</template>

<script>
import { ref } from "vue";
import { projects as PROJECTDATA } from "../projects";

export default {
  name: "ProjectList",
  setup() {
    const projects = ref(PROJECTDATA);

    return { projects };
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
