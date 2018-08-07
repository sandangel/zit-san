import * as React from 'react';
import styled, { theme } from '@zit-react/shared';

interface Props {
  text: string;
  length?: number;
}

interface State {
  expanded: boolean;
}

const StyledReadMore = styled.p`
  span:first-of-type {
    margin-right: 5px;
  }
  .hover-underline-animation {
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: ${theme.primaryColor};
  }
  .hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${theme.primaryColor};
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }
  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default class ReadMore extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { expanded: false };
  }

  render() {
    const length = this.props.length || 50;
    const { text } = this.props;
    const { expanded } = this.state;
    const textWithLength = text.length > length ? text.substring(0, length) + '...' : text;
    return (
      <StyledReadMore>
        <span>{expanded ? text : textWithLength}</span>
        <br />
        <span
          className="hover-underline-animation"
          onClick={() => this.setState({ expanded: !expanded })}
        >
          {expanded ? 'less' : 'more'}
        </span>
      </StyledReadMore>
    );
  }
}
