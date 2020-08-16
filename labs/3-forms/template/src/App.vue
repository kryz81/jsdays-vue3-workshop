<template>
  <h3>Work Tracker</h3>
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
      <td>
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
  <form>
    [form]
  </form>
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

.estimatedDays {
  font-weight: bold;
  color: green;
}

form {
  margin: 25px 0;
  padding: 25px;
  background-color: #f5f5f5;
  width: 50%;
}
</style>
