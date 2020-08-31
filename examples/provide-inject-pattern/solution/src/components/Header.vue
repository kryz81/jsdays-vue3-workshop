<template>
  <div class="mb-2 p-2 header" :class="theme">
    <div class="row">
      <div class="col-6">
        <h3>Project Manager</h3>
      </div>
      <div class="col-6 text-right">
        <button
          @click="switchTheme"
          class="btn"
          :class="{
            'btn-primary': theme === 'light',
            'btn-warning': theme === 'dark',
          }"
        >
          Switch theme
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["theme"],
  emits: ["switch-theme"],
  setup(props, { emit }) {
    function switchTheme() {
      emit("switch-theme");
    }

    return { switchTheme };
  },
};
</script>
