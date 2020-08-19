<template>
  <table class="table table-bordered">
    <tr class="header">
      <td>Project Name</td>
      <td>Estimated Days</td>
      <td>Logged Days</td>
      <td>Actions</td>
    </tr>
    <ProjectItem
      v-for="project in projects"
      :project="project"
      :key="project.id"
    />
  </table>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "ProjectList",
  components: { ProjectItem },
  props: {
    projects: {
      type: Array,
      default: [],
    },
  },
  setup() {},
};
</script>

<style scoped>
.header {
  font-weight: bold;
  background-color: #f5f5f5;
}
</style>
