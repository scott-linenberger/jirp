import React, { useContext } from 'react';
import DisplayModeContext from 'contexts/DisplayModeContext';
import { DisplayMode } from 'types';

export const Jh1: React.FC = (props) => {
  const { children } = props;
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return (
      <h1 className={'jh1'}>{children}</h1>
    );
  }

  return (
    <div className="text_heading">
      h1. {children}
    </div>
  );
};

export const Jh2: React.FC = (props) => {
  const { children } = props;
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return (
      <h2 className={'jh2'}>{children}</h2>
    );
  }

  return (
    <div className="text_heading">
      h2. {children}
    </div>
  );
};

export const Jh3: React.FC = (props) => {
  const { children } = props;
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return (
      <h3 className={'jh3'}>{children}</h3>
    );
  }

  return (
    <div className="text_heading">
      h3. {children}
    </div>
  );
};

export const Jh4: React.FC = (props) => {
  const { children } = props;
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return (
      <h4 className={'jh4'}>{children}</h4>
    );
  }

  return (
    <div className="text_heading">
      h4. {children}
    </div>
  );
};

export const Jh5: React.FC = (props) => {
  const { children } = props;
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return (
      <h5 className={'jh5'}>{children}</h5>
    );
  }

  return (
    <div className="text_heading">
      h5. {children}
    </div>
  );
};

export const Jh6: React.FC = (props) => {
  const { children } = props;
  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  if (mode === DisplayMode.RENDER) {
    return (
      <h6 className={'jh6'}>{children}</h6>
    );
  }

  return (
    <div className="text_heading">
      h6. {children}
    </div>
  );
};