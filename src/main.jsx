import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import General from './Components/General.jsx';
import Education from './Components/Education.jsx';
import Practical from './Components/Practical.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <Education />
    <Practical />
  </React.StrictMode>,
)
