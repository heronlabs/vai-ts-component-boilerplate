import './style.scss';

import {ChangeEvent, useState} from 'react';

import {MyComponentProps} from './props';
import {InitialMyComponentState} from './state';

const MyComponent = (props: MyComponentProps) => {
  const [state, setState] = useState(InitialMyComponentState);

  const handleChange = (
    field: string,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    const targetState = {
      ...state,
      [field]: e.target.value,
    };

    setState(targetState);
  };

  const callOutput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    props.output(state);
  };

  return (
    <div className="my-component">
      <h1>Hello World</h1>

      <h2>{props.input}</h2>

      <input
        value={state.example}
        onChange={e => handleChange('example', e)}
        tabIndex={1}
        type="text"
      />

      <button onClick={e => callOutput(e)} type="submit">
        Call Output
      </button>
    </div>
  );
};

export default MyComponent;
