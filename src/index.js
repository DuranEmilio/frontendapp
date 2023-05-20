import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FetchComp from './components/FetchComp';
import Body from './components/Body';
import Moddalsub from './components/Moddalsub';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='all'>
      <Body/>
      <FetchComp/>
      <Moddalsub/>
    </div>
  </React.StrictMode>
);
reportWebVitals();
