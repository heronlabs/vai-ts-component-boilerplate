import {MyComponentState} from './state';

export type MyComponentProps = {
  input: string;
  output: (state: MyComponentState) => void;
};
