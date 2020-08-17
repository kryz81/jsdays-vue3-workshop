<template>
  <h3>Work Tracker</h3>
  <h5>Budget: {{ budget }} days, logged days: {{ loggedSum }}</h5>
  <p v-show="loggedSum >= budget">
    <span class="badge badge-warning">Out of money</span>
  </p>
  <table class="table table-bordered">
    <tr class="header">
      <td>Project Name</td>
      <td>Estimated Days</td>
      <td>Logged Days</td>
      <td>Actions</td>
    </tr>
    <tr
      v-for="project in projects"
      :key="project.projectName"
      :class="{ highPriority: project.highPriority }"
    >
      <td>{{ project.projectName }}</td>
      <td>{{ project.estimatedDays }}</td>
      <td
        class="estimatedDays"
        :class="{ 'text-danger': project.loggedDays > project.estimatedDays }"
      >
        {{ project.loggedDays }}
      </td>
      <td :style="actionStyles">
        <button class="btn btn-primary btn-sm mr-3" @click="addDay(project.id)">
          Add 1 day
        </button>
        <button
          class="btn btn-primary btn-sm mr-3"
          :disabled="project.loggedDays === 0"
          @click="removeDay(project.id)"
        >
          Remove 1 day
        </button>
        <button
          class="btn btn-danger btn-sm"
          :disabled="project.loggedDays === 0"
          @click="resetProgress(project.id)"
        >
          Reset logged days
        </button>
      </td>
    </tr>
  </table>
  <form @submit.prevent="saveProject">
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
        v-model.trim="formData.projectName"
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
        v-model.number="formData.estimatedDays"
      />
    </div>
    <div class="form-group">
      <label for="category">Category<span class="required">*</span></label>
      <div v-if="validation.category" class="text-danger">
        {{ validation.category }}
      </div>
      <select id="category" class="form-control" v-model="formData.category">
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
        v-model="formData.highPriority"
      />
      <label for="highPriority" class="form-check-label">High priority</label>
    </div>
    <div>
      <button type="submit" class="btn btn-success">Save</button>
    </div>
  </form>
</template>

<script>
import { toRefs } from "vue";
import useProjectList from "./use/useProjectList";
import useAddProject from "./use/useAddProject";

export default {
  name: "App",
  props: [],
  components: {},
  emits: [],
  setup() {
    const {
      state,
      loggedSum,
      addDay,
      removeDay,
      resetProgress,
    } = useProjectList();

    const { formState, formData, validation, resetForm } = useAddProject();

    function saveProject() {
      formState.formSubmitted = true;

      if (!validation.value.formValid) {
        return;
      }
      state.projects = [
        ...state.projects,
        {
          projectName: formData.projectName,
          estimatedDays: formData.estimatedDays,
          category: formData.category,
          highPriority: formData.highPriority,
          loggedDays: 0,
        },
      ];
      resetForm();
    }

    return {
      ...toRefs(state),
      ...toRefs(formState),
      formData,
      loggedSum,
      addDay,
      removeDay,
      resetProgress,
      validation,
      saveProject,
    };
  },
};
</script>

<style scoped>
.header {
  font-weight: bold;
  background-color: #f5f5f5;
}

.estimatedDays {
  font-weight: bold;
  color: green;
}

form {
  margin: 25px 0;
  padding: 25px;
  background-color: #f5f5f5;
  width: 50%;
}

.required {
  color: red;
}

.highPriority {
  background-color: cornsilk;
}
</style>
