import { Select } from 'antd';

import { useHeaderStore } from '../header/headerStore';
const Home = () => {
  const data = useHeaderStore((s) => s.data);
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
    </div>
  );
};

export default Home;
