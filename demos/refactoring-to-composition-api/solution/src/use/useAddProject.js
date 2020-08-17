import { computed, reactive } from "vue";

export default function useAddProject() {
  const formState = reactive({
    projectCategories: [
      "Client Project",
      "Internal Project",
      "Proof of Concept",
    ],
    formSubmitted: false,
  });

  const formData = reactive({
    projectName: "",
    estimatedDays: 0,
    category: "",
    highPriority: false,
  });

  const validation = computed(() => {
    const formErrors = {
      formValid: true,
      projectName: "",
      estimatedDays: "",
      category: "",
    };

    if (!formState.formSubmitted) {
      return formErrors;
    }

    if (formData.projectName === "") {
      formErrors.projectName = "Project name cannot be empty";
      formErrors.formValid = false;
    }

    if (formData.category === "") {
      formErrors.category = "Category cannot be empty";
      formErrors.formValid = false;
    }

    if (formData.estimatedDays === "") {
      formErrors.estimatedDays = "Estimated days cannot be empty";
      formErrors.formValid = false;
    } else if (isNaN(formData.estimatedDays) || formData.estimatedDays < 0) {
      formErrors.estimatedDays =
        "Estimated days must be a positive number or 0";
      formErrors.formValid = false;
    }

    function resetForm() {
      formData.projectName = "";
      formData.estimatedDays = 0;
      formData.category = "";
      formData.highPriority = false;

      state.formSubmitted = false;
    }

    return formErrors;
  });

  function resetForm() {
    formData.projectName = "";
    formData.estimatedDays = 0;
    formData.category = "";
    formData.highPriority = false;

    formState.formSubmitted = false;
  }

  return { formState, formData, validation, resetForm };
}
