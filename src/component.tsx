import './component.scss';

import MyComponent from './application/my-component';

const Component = () => {
  return (
    <div className="content">
      <MyComponent input="Hi" output={console.log} />
    </div>
  );
};

export default Component;
