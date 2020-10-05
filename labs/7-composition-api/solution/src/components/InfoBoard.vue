<template>
  <h5>Budget: {{ budget }} days, logged days: {{ loggedSum }}</h5>
  <p v-show="loggedSum >= budget">
    <span class="badge badge-warning">Out of money</span>
  </p>
</template>

<script>
export default {
  name: "InfoBoard",
  props: {
    budget: {
      type: Number,
      required: true,
    },
    loggedSum: {
      type: Number,
      required: true,
    },
  },
};
</script>
