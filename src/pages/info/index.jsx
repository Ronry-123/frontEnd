import styles from './index.module.scss';
import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { getAllImageVersion } from '../../service';
const Info = () => {
  const [imageCollection, setImageCollection] = useState([]);
  const [imageCollectionValue, setImageCollectionValue] = useState();
  const [imageCollectionIndex, setImageCollectionIndex] = useState(-1);
  useEffect(() => {
    getAllImageVersion().then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
      setImageCollection(res);
    });
  }, []);
  return (
    <div>
      <h3>选择图片集</h3>
      <Select
        className={styles.select}
        placeholder="请选择图片集"
        value={imageCollectionValue}
        options={imageCollection.map((i) => ({
          value: i.version,
          label: i.version,
        }))} // 不知道为何注释掉imageCollection相关后才显示界面
        onChange={(e) => {
          setImageCollectionValue(e);
          const index = imageCollection.findIndex((i) => i.version === e);
          setImageCollectionIndex(index);
        }}
      />
      <h3>选择病人集</h3>
      <Select
        className={styles.select}
        placeholder="请选择病人集"
        options={imageCollection[imageCollectionIndex]?.imageGroupVoList.map(
          (i) => ({
            value: i.groupName,
            label: i.groupName,
          })
        )}
      />
    </div>
  );
};

export default Info;
