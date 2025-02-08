import React, { Fragment } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from "./providers";

import Routes from './routes';

function App() {

  return (
    <Provider>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;