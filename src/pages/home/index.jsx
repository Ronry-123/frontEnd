import { Select } from 'antd';
import Info from '../info/index';

import { useHeaderStore } from '../header/headerStore';
import { useEffect } from 'react';
import { login } from '../../service';
const Home = () => {
  const data = useHeaderStore((s) => s.data);
  useEffect(() => {
    login().then((res) => {
      const token = res.token;
      localStorage.setItem('token', token);
    });
  }, []);
  return (
    <div>
      Home
      <Select
        style={{ width: '200px' }}
        options={data.map((i) => ({
          label: i.featureName,
          value: i.id,
        }))}
      />
      <Info />
    </div>
  );
};

export default Home;
