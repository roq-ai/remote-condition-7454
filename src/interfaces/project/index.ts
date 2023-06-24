import { ClientProjectAccessInterface } from 'interfaces/client-project-access';
import { TaskInterface } from 'interfaces/task';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  client_project_access?: ClientProjectAccessInterface[];
  task?: TaskInterface[];
  organization?: OrganizationInterface;
  _count?: {
    client_project_access?: number;
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
