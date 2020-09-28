import * as React from 'react';
import styled, { keyframes, theme } from '@zit-react/shared';

const bouncingLoader = keyframes`
  from {
    opacity: 1;
    transform: translateY(-0.5rem);
  }

  to {
    opacity: 0.2;
    transform: translateY(0.5rem);
  }
`;

const StyledBouncingLoader = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  > div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.2rem;
    background: ${theme.accentColor};
    border-radius: 50%;
    animation: ${bouncingLoader} 0.6s infinite alternate;
  }
  > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const BouncingLoader = () => {
  return (
    <StyledBouncingLoader>
      <div />
      <div />
      <div />
    </StyledBouncingLoader>
  );
};

export default BouncingLoader;
