import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import General from './Components/General.jsx';
import Education from './Components/Education.jsx';
import Practical from './Components/Practical.jsx';
import Submit from './Components/Submit.jsx';
import Submitted from './Components/Submitted.jsx';

/*
====================================
Deploying Vite/React on Netlify 
====================================

You can deploy Vite/React projects on Netlify very easily by following the UI instructions
(just linking it to the GitHub repo). 

BUT, it won't deploy the main.jsx file (and in turn the CSS/SCSS files). To fix this, make sure that the:

  1.  Build command is set to "npm run build"
  2.  Publish directory is set to "dist".

You can do this on set up or go into the "deploy" settings.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <Education />
    <Practical />
    <Submit />
  </React.StrictMode>,
)
