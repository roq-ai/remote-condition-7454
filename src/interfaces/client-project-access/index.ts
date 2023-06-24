import { UserInterface } from 'interfaces/user';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface ClientProjectAccessInterface {
  id?: string;
  client_id: string;
  project_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  project?: ProjectInterface;
  _count?: {};
}

export interface ClientProjectAccessGetQueryInterface extends GetQueryInterface {
  id?: string;
  client_id?: string;
  project_id?: string;
}
