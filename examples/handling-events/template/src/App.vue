<template>
  <h3>Work Tracker</h3>
  <table class="table table-bordered">
    <tr class="header">
      <td>Project Name</td>
      <td>Estimated Days</td>
      <td>Logged Days</td>
      <td>Actions</td>
    </tr>
    <tr>
      <td>{{ projectName }}</td>
      <td>{{ estimatedDays }}</td>
      <td>{{ loggedDays }}</td>
      <td>
        <button class="btn btn-primary btn-sm mr-3">Add 1 day</button>
        <button class="btn btn-primary btn-sm mr-3">Remove 1 day</button>
        <button class="btn btn-danger btn-sm">Reset logged days</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      projectName: "Online Shop",
      estimatedDays: 6,
      loggedDays: 0,
    };
  },
};
</script>

<style scoped>
.header {
  font-weight: bold;
  background-color: #f5f5f5;
}
</style>
