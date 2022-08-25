import { Select } from 'antd';
import Drawing from '../drawing';

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
      <Drawing />
    </div>
  );
};

export default Home;
