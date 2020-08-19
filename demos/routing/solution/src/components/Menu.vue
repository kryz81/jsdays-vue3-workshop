<template>
  <div class="bg-light mb-4 p-2">
    <router-link to="/">Dashboard</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/users">Users</router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
a {
  margin-right: 25px;
}
</style>
