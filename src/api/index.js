import { request } from '../utils/request';

export const getImageFeatureConfigPOST = (data) => {
  return request.post('/feature/get-image-feature-config', data);
};

export const deleteImageFeatureConfigPOST = (data) => {
  return request.post('/feature/delete-image-feature-config', data);
};

export const updateImageFeatureConfigPOST = (data) => {
  return request.post('/feature/update-image-feature-config', data);
};

export const addImageFeatureConfigPOST = (data) => {
  return request.post('/feature/add-image-feature-config', data);
};

export const getAllImageVersionGET = () => {
  return request.get('/image/get-all-image-version');
};

export const loginPOST = (data) => {
  return request.post('auth/login', data);
};
