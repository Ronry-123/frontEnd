import {
  getImageFeatureConfigPOST,
  deleteImageFeatureConfigPOST,
  updateImageFeatureConfigPOST,
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
