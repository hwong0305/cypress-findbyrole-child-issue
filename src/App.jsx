import { Terminal } from '@carbon/icons-react';
import './App.scss';

function App() {
  return (
    <div className="container">
      <div>
        <button type="button" aria-labelledby="log-tt">
          <Terminal />
        </button>

        <span role="tooltip" aria-hidden="true" className="popover" id="log-tt">
          <span className="display-none">Log</span>
        </span>
      </div>
    </div>
  );
}

export default App;
