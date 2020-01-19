import {
  createContext,
} from 'react';

import {
  DisplayMode,
  ModeContext,
} from 'types';

const modeContext: ModeContext = {
    mode: DisplayMode.RENDER,
    changeMode: (mode) => {},
};

const DisplayModeContext = createContext(modeContext);

export default DisplayModeContext;
