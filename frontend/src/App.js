import React from 'react';

import { Auth, Home } from 'pages';

const App = (props) => {
  const { isAuth } = props;

  return (
    <div className='App'>
      <Home />
    </div>
  );
};

export default App;
