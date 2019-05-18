// A Higher order component (HOC) is a component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract State


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share.</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

// require authentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
      ) : (
        <p>Please Log in to view Info</p>
      )}
    </div>
  )
};


const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));
