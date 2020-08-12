import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { SideBar } from '../../containers';
import { connect } from 'react-redux';

import './Home.scss';

import { dialogsActions } from 'redux/actions';

const Home = (props) => {
  const { setCurrentDialogId, user } = props;

  useEffect(() => {
    const { pathname } = props.location;
    const dialogId = pathname.split('/').pop();
    setCurrentDialogId(dialogId);
  }, [props.location.pathname]);

  return (
    <section className='home'>
      <div className='chat'>
        <SideBar />
        <h1>Home</h1>
      </div>
    </section>
  );
};

export default withRouter(
  connect(({ user }) => ({ user: user.data }), dialogsActions)(Home)
);
