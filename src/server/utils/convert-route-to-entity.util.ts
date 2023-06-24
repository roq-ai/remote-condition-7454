const mapping: Record<string, string> = {
  'client-project-accesses': 'client_project_access',
  organizations: 'organization',
  projects: 'project',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
