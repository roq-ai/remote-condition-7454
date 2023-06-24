import * as yup from 'yup';

export const clientProjectAccessValidationSchema = yup.object().shape({
  client_id: yup.string().nullable().required(),
  project_id: yup.string().nullable().required(),
});
