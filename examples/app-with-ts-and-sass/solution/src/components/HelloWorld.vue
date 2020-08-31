<template>
  <h1>
    Hello <span>{{ msg }}</span>
  </h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

let a: number;

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
});
</script>

<style scoped lang="scss">
h1 {
  color: blue;

  span {
    color: magenta;
  }
}
</style>
