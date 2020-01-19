import React, { FC } from 'react';
import BemIt from 'helpers/BemIt';
import classnames from 'classnames';

interface ToggleProps {
  isOn: boolean;
  toggle: () => void;
}

const Toggle: React.FC<ToggleProps> = (
  props,
) => {
  const {
    isOn,
    toggle
  } = props;

  const b = new BemIt('toggle');

  const styleToggle = classnames(
    b.block,
    { [`${b.m('on').s()}`]: isOn === true },
    { [`${b.m('off').s()}`]: isOn === false }
  );

  const styleButton = classnames(
    b.e('button').s(),
    { [`${b.m('on').s()}`]: isOn === true },
    { [`${b.m('off').s()}`]: isOn === false },
  );

  return (
    <div
      className={styleToggle}
      onClick={toggle}
    >
      <div
        className={styleButton}
      />
    </div>
  );
};

export default Toggle;
