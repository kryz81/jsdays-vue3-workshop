export async function getProjects() {
  const response = await fetch("http://localhost:4000/projects");
  return response.json();
}

export async function addProject(projectData) {
  return fetch("http://localhost:4000/projects", {
    method: "POST",
    body: JSON.stringify(projectData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function deleteProject(projectId) {
  return fetch(`http://localhost:4000/projects/${projectId}`, {
    method: "DELETE",
  });
}

export async function updateProject(projectId, projectData) {
  return fetch(`http://localhost:4000/projects/${projectId}`, {
    method: "PUT",
    body: JSON.stringify(projectData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
