<template>
  <div class="bg-light mb-4 p-2">
    <a href="" @click.prevent="open('dashboard')">Dashboard</a>
    <a href="" @click.prevent="open('projects')">Projects</a>
    <a href="" @click.prevent="open('users')">Users</a>
  </div>
</template>

<script>
export default {
  name: "Menu",
  setup(props, { emit }) {
    function open(page) {
      emit("open", page);
    }

    return { open };
  },
};
</script>

<style scoped>
a {
  margin-right: 25px;
}
</style>
