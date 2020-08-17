<template>
  <table class="table table-bordered">
    <tr class="header">
      <td>Project Name</td>
      <td>Estimated Days</td>
      <td>Logged Days</td>
      <td>Actions</td>
    </tr>
    <tr
      v-for="project in projects"
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
        <button class="btn btn-primary btn-sm mr-3" @click="addDay(project.id)">
          Add 1 day
        </button>
        <button
          class="btn btn-primary btn-sm mr-3"
          :disabled="project.loggedDays === 0"
          @click="removeDay(project.id)"
        >
          Remove 1 day
        </button>
        <button
          class="btn btn-danger btn-sm"
          :disabled="project.loggedDays === 0"
          @click="resetProgress(project.id)"
        >
          Reset logged days
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "ProjectList",
  emits: ["add-day", "remove-day", "reset-progress"],
  props: {
    projects: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      actions: {
        backgroundColor: "#f9f9f9",
      },
    };
  },
  methods: {
    addDay(projectId) {
      this.$emit("add-day", projectId);
    },
    removeDay(projectId) {
      this.$emit("remove-day", projectId);
    },
    resetProgress(projectId) {
      this.$emit("reset-progress", projectId);
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
