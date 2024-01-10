import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/index.scss';

import General from './General';
import Education from './Education';
import Practical from './Practical';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <Education />
    <Practical />
  </React.StrictMode>,
)
