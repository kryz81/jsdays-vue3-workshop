<template>
  <h5>Budget: {{ budget }} days, logged days: {{ loggedSum }}</h5>
  <p v-show="loggedSum >= budget">
    <span class="badge badge-warning">Out of money</span>
  </p>
</template>

<script>
export default {
  name: "InfoBoard",
  data() {
    return {
        budget: 100,
        loggedSum: 300
    }
  },
};
</script>
