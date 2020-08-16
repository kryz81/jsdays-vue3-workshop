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
  created() {
    this.log = "Started...\r\n";
    this.check = setInterval(() => {
      const online = window.navigator.onLine;
      if (online) {
        this.log += `${Date.now()} Online\r\n`;
      } else {
        this.log += `${Date.now()} Offline\r\n`;
      }
    }, 500);
  },
  beforeUnmount() {
    clearInterval(this.check);
  },
};
</script>
