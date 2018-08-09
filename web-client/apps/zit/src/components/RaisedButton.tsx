import * as React from 'react';
interface Props {
  renderText: string;
}
const RaisedButton: React.SFC<Props> = props => {
  return (
    <button className="mat-button" type="button">
      <span>{props.renderText}</span>
    </button>
  );
};

export default RaisedButton;
