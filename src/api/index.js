import { request } from '../utils/request';

export const getImageFeatureConfigPOST = (data) => {
  return request.post('/feature/get_image-feature-config', data);
};

export const deleteImageFeatureConfigPOST = (data) => {
  return request.post('/feature/delete_image-feature-config', data);
};

export const updateImageFeatureConfigPOST = (data) => {
  return request.post('/feature/update_image-feature-config', data);
};
