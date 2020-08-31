<template>
  <InfoModal v-if="data.showDetails" @close="data.showDetails = false">
    <template #title
      ><strong>{{ data.project.projectName }}</strong></template
    >
    <template #default>
      <div>
        Estimated days: <strong>{{ data.project.estimatedDays }}</strong>
      </div>
      <div>
        Logged days: <strong>{{ data.project.loggedDays }}</strong>
      </div>
    </template>
  </InfoModal>
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
import InfoModal from "./InfoModal.vue";

export default {
  name: "ProjectList",
  components: {
    InfoModal,
  },
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
