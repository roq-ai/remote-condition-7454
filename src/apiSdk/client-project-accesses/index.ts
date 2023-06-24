import axios from 'axios';
import queryString from 'query-string';
import { ClientProjectAccessInterface, ClientProjectAccessGetQueryInterface } from 'interfaces/client-project-access';
import { GetQueryInterface } from '../../interfaces';

export const getClientProjectAccesses = async (query?: ClientProjectAccessGetQueryInterface) => {
  const response = await axios.get(`/api/client-project-accesses${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createClientProjectAccess = async (clientProjectAccess: ClientProjectAccessInterface) => {
  const response = await axios.post('/api/client-project-accesses', clientProjectAccess);
  return response.data;
};

export const updateClientProjectAccessById = async (id: string, clientProjectAccess: ClientProjectAccessInterface) => {
  const response = await axios.put(`/api/client-project-accesses/${id}`, clientProjectAccess);
  return response.data;
};

export const getClientProjectAccessById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/client-project-accesses/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteClientProjectAccessById = async (id: string) => {
  const response = await axios.delete(`/api/client-project-accesses/${id}`);
  return response.data;
};
