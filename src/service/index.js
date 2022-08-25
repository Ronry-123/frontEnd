import {
  getImageFeatureConfigPOST,
  deleteImageFeatureConfigPOST,
  updateImageFeatureConfigPOST,
  addImageFeatureConfigPOST,
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
