import './app.scss';

import MyComponent from '../my-component';

const App = () => {
  return (
    <div className="content">
      <MyComponent input="Hi" output={console.log} />
    </div>
  );
};

export default App;
