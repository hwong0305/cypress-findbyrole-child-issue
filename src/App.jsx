import { Download, Play, Terminal } from '@carbon/icons-react';
import { Button, Popover, PopoverContent } from '@carbon/react';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Button hasIconOnly kind="ghost" iconDescription="Export" renderIcon={Download} />

      <Popover>
        <PopoverContent aria-hidden="true" role="tooltip" id="log-tt">
          Log
        </PopoverContent>
      </Popover>

      <div>
        <button type="button" aria-labelledby="log-tt">
          <Terminal />
        </button>

        <span aria-hidden="true" id="log-tt">
          <span hidden>Log</span>
        </span>
      </div>

      <div>
        <button type="button" aria-labelledby="play-tt">
          <Play />
        </button>

        <span aria-hidden="false" id="play-tt">
          <span>Play</span>
        </span>
      </div>
    </div>
  );
}

export default App;
