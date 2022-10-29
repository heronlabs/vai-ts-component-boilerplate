import './style.scss';

import {ChangeEvent, Component} from 'react';

import {MyComponentProps} from './props';
import {InitialMyComponentState, MyComponentState} from './state';

class MyComponent extends Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = InitialMyComponentState;
  }

  private handleChange(
    field: string,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();

    const targetState = {
      ...this.state,
      [field]: e.target.value,
    };

    this.setState(targetState);
  }

  private callOutput(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    this.props.output(this.state);
  }

  public render() {
    return (
      <div className="my-component">
        <h1>Hello World</h1>

        <h2>{this.props.input}</h2>

        <input
          value={this.state.example}
          onChange={e => this.handleChange('example', e)}
          tabIndex={1}
          type="text"
        />

        <button onClick={e => this.callOutput(e)} type="submit">
          Call Output
        </button>
      </div>
    );
  }
}

export default MyComponent;
