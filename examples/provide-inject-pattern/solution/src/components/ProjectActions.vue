<template>
  <div :class="theme" class="p-3">
    <button class="btn btn-primary btn-sm mr-3">
      Add 1 day
    </button>
    <button
      class="btn btn-primary btn-sm mr-3"
      :disabled="project.loggedDays === 0"
    >
      Remove 1 day
    </button>
    <button class="btn btn-danger btn-sm" :disabled="project.loggedDays === 0">
      Reset logged days
    </button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "ProjectActions",
  props: ["project"],
  setup() {
    const theme = inject("theme");

    // theme.value = "blah"; // not working because of "readonly" in root component

    return { theme };
  },
};
</script>
