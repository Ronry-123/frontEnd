import { Button, Drawer, Table, Popconfirm, Typography, message } from 'antd';

import { useState, useEffect } from 'react';
import {
  getImageFeatureConfig,
  updateImageFeatureConfig,
  deleteImageFeatureConfig,
  addImageFeatureConfig,
} from '../../service';

/* import { useHeaderStore } from './headerStore';
const data = useHeaderStore((state) => state.data);
const setData = useHeaderStore((state) => state.setData);   防止点击创建后变成空白页面,因此注释掉了*/

const { Paragraph } = Typography;

const Header = () => {
  const [visible, setVisible] = useState(false);

  const [data, setData] = useState([]);

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
      title: '图片属性名称',
      dataIndex: 'featureName',
      render: (text, row, index) => (
        <Paragraph
          id={text ? row.id : 'temp-create-feature-name'}
          editable={{
            onChange: (newVal) => {
              // creat
              if (!row.id) {
                if (newVal == '') {
                  setData((prev) => {
                    const newVal = [...prev];
                    newVal.shift();
                    return newVal;
                  });
                } else {
                  addImageFeatureConfig({
                    dataFormat: '',
                    defaultValue: 'false',
                    featureName: newVal,
                    imageVersion: 'test1', // 图片版本有三个：test1, 有丝分裂数据, 类器官数据。由于请求的是test1，因此此处创建时填写test1
                    remark: '',
                    type: 'checkbox',
                  }).then(() => {
                    message.success('创建成功');
                    updateTable();
                  });
                }
              } else {
                // edit
                if (newVal == '') return;
                updateImageFeatureConfig({
                  ...row,
                  featureName: newVal,
                }).then(() => {
                  message.success('修改成功');
                  updateTable();
                });
              }
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
        <Button
          type="link"
          onClick={() => {
            const newItem = {
              dataFormat: '',
              defaultValue: 'false',
              featureName: '',
              imageVersion: '有丝分裂数据',
              remark: '',
              type: 'checkbox',
            };
            setData((prev) => {
              const newVal = [newItem, ...prev];
              return newVal;
            });
            setTimeout(() => {
              document
                .getElementById('temp-create-feature-name')
                .getElementsByClassName('ant-typography-edit')[0]
                .click();
            });
          }}
        >
          创建
        </Button>
      ),
      dataIndex: 'oparate',
      width: 100,
      render: (text, row, index) => (
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
