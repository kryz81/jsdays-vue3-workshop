<template>
  <form @submit.prevent="saveProject" ref="form">
    <div class="form-group">
      <label for="projectName"
        >Project Name<span class="required">*</span></label
      >
      <input
        id="projectName"
        class="form-control"
        v-model.trim="form.projectName"
      />
    </div>
    <div class="form-group">
      <label for="estimatedDays"
        >Estimated days<span class="required">*</span></label
      >
      <input
        id="estimatedDays"
        type="number"
        class="form-control"
        min="0"
        v-model.number="form.estimatedDays"
      />
    </div>
    <div class="form-group">
      <label for="category">Category<span class="required">*</span></label>
      <select id="category" class="form-control" v-model="form.category">
        <option value="">--- Select ---</option>
        <option v-for="option in projectCategories" :value="option" :key="option">{{
          option
        }}</option>
      </select>
    </div>
    <div class="form-group form-check">
      <input
        id="highPriority"
        type="checkbox"
        class="form-check-input"
        v-model="form.highPriority"
      />
      <label for="highPriority" class="form-check-label">High priority</label>
    </div>
    <div>
      <button type="submit" class="btn btn-success">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddProject",
  data() {
    return {
      form: {
        projectName: "",
        estimatedDays: 0,
        category: "",
        highPriority: false,
      },
      projectCategories: [
        "Client Project",
        "Internal Project",
        "Proof of Concept",
      ],
    };
  },
  methods: {
    saveProject() {
      this.resetForm();
      this.formOpened = false;
    },
    resetForm() {
      this.form = {
        projectName: "",
        estimatedDays: 0,
        category: "",
        highPriority: false,
      };
    },
  },
};
</script>

<style scoped>
form {
  margin: 25px 0;
  padding: 25px;
  background-color: #f5f5f5;
  width: 50%;
}

.required {
  color: red;
}
</style>
