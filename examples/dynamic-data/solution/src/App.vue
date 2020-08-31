<template>
  <h1>Conference Tracker, version {{ version }}</h1>
  <p>
    There are currently <strong>{{ users.length }}</strong> users registered
  </p>
  <p v-html="currentSession"></p>
  <p>Trainers: {{ trainers[0] }}, {{ trainers[1] }}</p>
  <p>
    Contains exercises:<strong>{{ containsExercises }}</strong>
  </p>
  <p><a v-bind:href="detailsLink">Click to check more details</a></p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      version: "1.0",
      users: ["User 1", "User 2", "User 3"],
      currentSession: "Testing Applications with <strong>Jest</strong>",
      trainers: ["Max Mustermann", "Tim Tester"],
      category: "workshop",
      detailsLink: "http://google.com",
    };
  },
  methods: {
    getVersion() {
      return this.version;
    },
  },
  computed: {
    containsExercises() {
      switch (this.category) {
        case "workshop":
        case "coding-session":
          return "Yes";
        default:
          return "No";
      }
    },
  },
};
</script>
