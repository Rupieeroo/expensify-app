import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../actions/auth';

export const LogInPage = ({ startLogIn }) => (
  <div>
    <button onClick={startLogIn}>Log In</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogIn: () => dispatch(startLogIn())
});

export default connect(undefined, mapDispatchToProps)(LogInPage);
