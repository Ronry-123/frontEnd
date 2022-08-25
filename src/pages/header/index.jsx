import { Button, Drawer, Table, Popconfirm, Typography, message } from 'antd';

import { useState, useEffect } from 'react';
import {
  getImageFeatureConfig,
  updateImageFeatureConfig,
  deleteImageFeatureConfig,
  addImageFeatureConfig,
} from '../../service';

import { useHeaderStore } from './headerStore';

const { Paragraph } = Typography;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const data = useHeaderStore((state) => state.data);
  const setData = useHeaderStore((state) => state.setData);
  const addLine = () => {
    const newData = [...data];
    newData.unshift({
      id: 0,
      featureName: '',
      type: 'bool',
      remark: '',
      valid: true,
      value: null,
      dataFormat: null,
      defaultValue: 'false',
    });
    setData(newData);
    addImageFeatureConfig(newData);
    updateTable();
  };

  const updateTable = () => {
    return getImageFeatureConfig({ imageVersion: 'test1' }).then((res) => {
      setData(res);
    });
  };

  useEffect(() => {
    if (visible) {
      updateTable();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const columns = [
    {
      title: '属性名称',
      dataIndex: 'featureName',
      render: (text, row, index) => (
        <Paragraph
          editable={{
            onChange: (newVal) => {
              if (!newVal) return;
              if (newVal === row.featureName) return;
              updateImageFeatureConfig({
                ...row,
                featureName: newVal,
              }).then(() => {
                message.success('修改成功');
                updateTable();
              });
            },
          }}
        >
          {text}
        </Paragraph>
      ),
    },
    {
      title: '备注',
      dataIndex: 'remark',
    },
    {
      title: (
        <Button size="small" type="link" onClick={addLine}>
          创建
        </Button>
      ),
      dataIndex: 'oparate',
      render: (text, row) => (
        <Popconfirm
          title={
            <div>
              确定删除<span style={{ color: 'red' }}>{row.featureName}</span>{' '}
              吗?
            </div>
          }
          okText="确定"
          onConfirm={() => {
            deleteImageFeatureConfig({
              id: row.id,
            }).then(() => {
              message.success('删除成功');
              updateTable();
            });
          }}
          cancelText="取消"
        >
          <a href="#">Delete</a>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <div>
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          图片属性设置
        </Button>
        <Button>分类配置</Button>
      </div>
      <Drawer
        title="图片属性设置 Image Feature Setting"
        placement="left"
        width={600}
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
      >
        <Table dataSource={data} columns={columns} />;
      </Drawer>
    </>
  );
};

export default Header;
