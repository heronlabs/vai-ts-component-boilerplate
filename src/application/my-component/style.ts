import styled from 'styled-components';

import {SOFT_GREY} from '../style/abstracts/variables';

export const MyComponent = styled.div`
  width: 100%;
  padding: 20px 35px;
  display: flex;
  flex-direction: column;
  align-content: center;
  border: 1px solid ${SOFT_GREY};
  border-radius: 14px;
  margin: 20px 0;

  h1 {
    text-align: center;
    margin: 0 0 10px 0;
  }
`;
