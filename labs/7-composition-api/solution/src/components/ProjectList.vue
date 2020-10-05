<template>
  <h5>Number of exceeded projects: {{ exceededProjects }}</h5>
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
import { computed } from "vue";

export default {
  name: "ProjectList",
  emits: ["add-day", "remove-day", "reset-progress"],
  props: {
    projects: {
      type: Array,
      default: [],
    },
  },
  setup(props, { emit }) {
    const actions = { backgroundColor: "#f9f9f9" };

    const exceededProjects = computed(() => {
      return props.projects.reduce((total, project) => {
        if (project.loggedDays > project.estimatedDays) {
          return total + 1;
        }
        return total;
      }, 0);
    });

    function addDay(projectId) {
      emit("add-day", projectId);
    }

    function removeDay(projectId) {
      emit("remove-day", projectId);
    }

    function resetProgress(projectId) {
      emit("reset-progress", projectId);
    }

    return { actions, addDay, removeDay, resetProgress, exceededProjects };
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
