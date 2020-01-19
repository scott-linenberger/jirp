import React, {
  FC,
  useContext,
} from 'react';
import DisplayModeContext from 'contexts/DisplayModeContext';
import DisplayModeToggle from 'components/DisplayModeToggle/DisplayModeToggle';
import BemIt from 'helpers/BemIt';
import classnames from 'classnames';
import { DisplayMode } from 'types';

const FileTemplate: FC = (
  props,
) => {
  const {
    children,
  } = props;

  const contextDisplayMode = useContext(DisplayModeContext);
  const { mode } = contextDisplayMode;

  const b = new BemIt('template');

  const textStyle = classnames(
    b.e('text').s(),
    { [`${b.m('text-mode').s()}`]: mode === DisplayMode.TEXT },
    { [`${b.m('render-mode').s()}`]: mode === DisplayMode.RENDER },
  );

  return (
    <div className={b.s()}>
      <div>
        <DisplayModeToggle />
      </div>
      <div className={textStyle}>
        {children}
      </div>
    </div>
  );
};

export default FileTemplate;
