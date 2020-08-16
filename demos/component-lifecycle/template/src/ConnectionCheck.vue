<template>
  <div class="my-4">
    <strong>
      <pre>{{ log }}</pre>
    </strong>
  </div>
</template>

<script>
export default {
  name: "ConnectionCheck",
  data() {
    return {
      log: "",
      check: null,
    };
  },
};
</script>
