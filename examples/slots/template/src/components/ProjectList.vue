<template>
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
        <button class="btn btn-sm btn-primary" @click="showDetails(project)">
          Details
        </button>
      </td>
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
  setup() {
    const data = reactive({
      showDetails: false,
      project: null,
    });

    function showDetails(project) {
      data.showDetails = true;
      data.project = project;
    }

    return { data, showDetails };
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
