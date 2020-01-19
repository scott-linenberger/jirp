import React, {
  FC,
  useContext,
} from 'react';

import DisplayModeContext from 'contexts/DisplayModeContext';
import BemIt from 'helpers/BemIt';
import Toggle from 'components/Toggle/Toggle';
import { DisplayMode } from 'types';

const DisplayModeToggle: FC = () => {
  const contextDisplayMode = useContext(DisplayModeContext);
  const bem = new BemIt('display_mode_toggle');

  const { mode, changeMode } = contextDisplayMode;
  const isRender = mode === DisplayMode.RENDER;

  const toggleMode = () => {
    const newMode = isRender
    ? DisplayMode.TEXT
    : DisplayMode.RENDER;

    changeMode(newMode);
  }

  return (
    <div className={bem.s()}>
      <Toggle
        isOn={isRender}
        toggle={() => {toggleMode()}}
      />
    </div>
  );
};

export default DisplayModeToggle;
