import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

import './Home.scss';

const Home = (props) => {
  const { setCurrentDialogId, user } = props;
  return (
    <section className='home'>
      <div className='chat'>
        <h1>Home</h1>
      </div>
    </section>
  );
};

export default Home;
