<template>
  <form @submit.prevent="saveProject" ref="form">
    <div class="form-group">
      <label for="projectName"
        >Project Name<span class="required">*</span></label
      >
      <div v-if="validation.projectName" class="text-danger">
        {{ validation.projectName }}
      </div>
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
      <div v-if="validation.estimatedDays" class="text-danger">
        {{ validation.estimatedDays }}
      </div>
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
      <div v-if="validation.category" class="text-danger">
        {{ validation.category }}
      </div>
      <select id="category" class="form-control" v-model="form.category">
        <option value="">--- Select ---</option>
        <option v-for="option in projectCategories" :value="option">{{
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
  emits: ["submit"],
  data() {
    return {
      formSubmitted: false,
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
  computed: {
    validation() {
      const formErrors = {
        formValid: true,
        projectName: "",
        estimatedDays: "",
        category: "",
      };

      if (!this.formSubmitted) {
        return formErrors;
      }

      const { projectName, category, estimatedDays } = this.form;

      if (projectName === "") {
        formErrors.projectName = "Project name cannot be empty";
        formErrors.formValid = false;
      }

      if (category === "") {
        formErrors.category = "Category cannot be empty";
        formErrors.formValid = false;
      }

      if (estimatedDays === "") {
        formErrors.estimatedDays = "Estimated days cannot be empty";
        formErrors.formValid = false;
      } else if (isNaN(estimatedDays) || estimatedDays < 0) {
        formErrors.estimatedDays =
          "Estimated days must be a positive number or 0";
        formErrors.formValid = false;
      }

      return formErrors;
    },
  },
  methods: {
    saveProject() {
      this.formSubmitted = true;

      if (!this.validation.formValid) {
        return;
      }

      this.$emit("save", this.form);

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
      this.formSubmitted = false;
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
