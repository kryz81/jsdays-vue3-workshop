<template>
  <tr :class="{ highPriority: project.highPriority }">
    <td>{{ project.projectName }}</td>
    <td>{{ project.estimatedDays }}</td>
    <td
      class="estimatedDays"
      :class="{ 'text-danger': project.loggedDays > project.estimatedDays }"
    >
      {{ project.loggedDays }}
    </td>
    <td><ProjectActions :project="project" /></td>
  </tr>
</template>

<script>
import ProjectActions from "./ProjectActions.vue";

export default {
  name: "ProjectItem",
  components: { ProjectActions },
  props: {
    project: Object,
  },
  setup() {},
};
</script>

<style scoped>
.estimatedDays {
  font-weight: bold;
  color: green;
}
</style>
