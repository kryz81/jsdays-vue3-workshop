<template>
  <div>
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
export default {
  name: "ProjectActions",
  props: ["project"],
};
</script>
