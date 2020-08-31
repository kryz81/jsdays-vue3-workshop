import { computed, reactive } from "vue";
import { projects } from "../projects";

export default function useProjectList() {
  const state = reactive({
    projects: projects,
    budget: 20,
    actionStyles: {
      backgroundColor: "#f9f9f9",
    },
  });

  const loggedSum = computed(() =>
    state.projects.reduce(
      (total, current) => (total = total + current.loggedDays),
      0
    )
  );

  function addDay(projectId) {
    state.projects = state.projects.map((project) => {
      if (projectId === project.id) {
        return { ...project, loggedDays: project.loggedDays + 1 };
      }
      return project;
    });
  }

  function removeDay(projectId) {
    state.projects = state.projects.map((project) => {
      if (projectId === project.id) {
        return { ...project, loggedDays: project.loggedDays - 1 };
      }
      return project;
    });
  }

  function resetProgress(projectId) {
    state.projects = state.projects.map((project) => {
      if (projectId === project.id) {
        return { ...project, loggedDays: 0 };
      }
      return project;
    });
  }

  return { state, loggedSum, addDay, removeDay, resetProgress };
}
