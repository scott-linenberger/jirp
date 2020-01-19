import React, { useContext } from 'react';
import DisplayModeContext from 'contexts/DisplayModeContext';
import { DisplayMode } from 'types';

export const Jstrong: React.FC = (props) => {
  const { children } = props;
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return(
      <strong>{children}</strong>
    );
  }

  return(
    <span>*{children}*</span>
  );
};

export const Jem: React.FC = (props) => {
  const { children } = props;
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return(
      <em>{children}</em>
    );
  }

  return(
    <span>_{children}_</span>
  );
};