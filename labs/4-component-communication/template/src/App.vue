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
      v-for="(project, index) in projects"
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
      <td :style="actions">
        <button class="btn btn-primary btn-sm mr-3" @click="addDay(index)">
          Add 1 day
        </button>
        <button
          class="btn btn-primary btn-sm mr-3"
          :disabled="project.loggedDays === 0"
          @click="removeDay(index)"
        >
          Remove 1 day
        </button>
        <button
          class="btn btn-danger btn-sm"
          :disabled="project.loggedDays === 0"
          @click="resetProgress(index)"
        >
          Reset logged days
        </button>
      </td>
    </tr>
  </table>
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
import { projects } from "./projects";

export default {
  name: "App",
  data() {
    return {
      projects: projects,
      budget: 20,
      actions: {
        backgroundColor: "#f9f9f9",
      },
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
    loggedSum() {
      return this.projects.reduce(
        (total, current) => (total = total + current.loggedDays),
        0
      );
    },
  },
  methods: {
    addDay(projectIndex) {
      this.projects = this.projects.map((project, index) => {
        if (projectIndex === index) {
          return { ...project, loggedDays: project.loggedDays + 1 };
        }
        return project;
      });
    },
    removeDay(projectIndex) {
      this.projects = this.projects.map((project, index) => {
        if (projectIndex === index) {
          return { ...project, loggedDays: project.loggedDays - 1 };
        }
        return project;
      });
    },
    resetProgress(projectIndex) {
      this.projects = this.projects.map((project, index) => {
        if (projectIndex === index) {
          return { ...project, loggedDays: 0 };
        }
        return project;
      });
    },
    saveProject() {
      const { projectName, estimatedDays, category, highPriority } = this.form;
      this.projects = [
        ...this.projects,
        { projectName, estimatedDays, category, highPriority, loggedDays: 0 },
      ];
      this.resetForm();
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
