import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';
import {WPTContext} from './context';
import { Stage1, Stage2 } from './views';

export default function App() {
  const ctx = React.useContext(WPTContext);
  return (
    <div className='wrapper'>
      <div className='center-wrapper'>
        <h1>Who pays the bill ?</h1>
        {ctx.stage === 1 ? <Stage1 /> : <Stage2 /> }
      </div>
    </div>
  );
}
