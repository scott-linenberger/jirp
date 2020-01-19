import React, { useContext } from 'react';
import DisplayModeContext from 'contexts/DisplayModeContext';
import { DisplayMode } from 'types';

export interface JbrProps {
  useSlashes?: boolean;
}

export const Jbr: React.FC<JbrProps> = (props) => {
  const { useSlashes } = props;
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return (
      <br />
    );
  }

  if (useSlashes) {
    return (
      <div>
        <span>&#92;&#92;</span>
      </div>
    );
  }

  return (
    <>
      <br />
      <br />
    </>
  );
};

export const Jhr: React.FC = (props) => {
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return (
      <hr />
    );
  }

  return (
    <div>
      <span>----</span>
    </div>
  );
};