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
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Header",
  setup() {
    const store = useStore();
    const theme = computed(() => store.state.theme);

    function switchTheme() {
      const newTheme = theme.value === "light" ? "dark" : "light";
      store.commit("setTheme", newTheme);
    }

    return { theme, switchTheme };
  },
};
</script>
