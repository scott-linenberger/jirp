import React, { useState } from 'react';
import DisplayModeContext from 'contexts/DisplayModeContext';
import { DisplayMode } from 'types';
import FileTemplate from 'templates/FileTemplate/FileTemplate';

import SampleDoc from 'docs/SampleDoc';

const JIRP: React.FC = () => {
  const [displayMode, setDisplayMode] = useState(
    DisplayMode.RENDER,
  );

  const contextDisplayMode = {
    mode: displayMode,
    changeMode: (displayMode: DisplayMode) => {
      setDisplayMode(displayMode);
    },
  };

  return (
    <DisplayModeContext.Provider value={contextDisplayMode}>
      <FileTemplate>
        <SampleDoc />
      </FileTemplate>
    </DisplayModeContext.Provider>
  );
}

export default JIRP;
