import {
  getImageFeatureConfigPOST,
  deleteImageFeatureConfigPOST,
  updateImageFeatureConfigPOST,
  addImageFeatureConfigPOST,
  getAllImageVersionGET,
  loginPOST,
} from '../api';

export const getImageFeatureConfig = (data) => {
  return getImageFeatureConfigPOST(data);
};

export const deleteImageFeatureConfig = (data) => {
  return deleteImageFeatureConfigPOST(data);
};

export const updateImageFeatureConfig = (data) => {
  return updateImageFeatureConfigPOST(data);
};

export const addImageFeatureConfig = (data) => {
  return addImageFeatureConfigPOST(data);
};

export const getAllImageVersion = (data) => {
  return getAllImageVersionGET(data);
};

export const login = () => {
  const data = { email: 'test@gmail.com', password: '123456' };
  return loginPOST(data);
};
