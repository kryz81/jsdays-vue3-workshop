<template>
  <h3>Project Manager</h3>
  <Menu />
  <router-view />
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>
