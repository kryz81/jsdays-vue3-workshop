<template>
  <div v-if="project">
    <h5>{{ project.projectName }}</h5>
    <p>Estimated days: {{ project.estimatedDays }}</p>
    <p>Logged days: {{ project.loggedDays }}</p>
  </div>
</template>

<script>
import { projects } from "../projects";
import { useRouter } from "vue-router";
import { ref, watchEffect } from "vue";

export default {
  name: "ProjectDetails",
  setup() {
    const { currentRoute } = useRouter();
    const project = ref(null);

    watchEffect(() => {
      project.value = projects.find(
        (project) => project.id === Number(currentRoute.value.params.projectId)
      );
    });

    return { project };
  },
};
</script>
