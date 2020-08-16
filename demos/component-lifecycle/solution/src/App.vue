<template>
  <h3 class="my-4">Diagnostics Tool</h3>
  <div clas="my-4">
    <button class="btn btn-primary" @click="checkStarted = !checkStarted">
      Check connection
    </button>
  </div>
  <ConnectionCheck v-if="checkStarted" />
</template>

<script>
import ConnectionCheck from "./ConnectionCheck.vue";

export default {
  name: "App",
  components: { ConnectionCheck },
  data() {
    return {
      checkStarted: false,
    };
  },
};
</script>
