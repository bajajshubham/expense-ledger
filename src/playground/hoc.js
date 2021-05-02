// Higher Order Component (HOC) -> A component that renders another component
// HOC GOAL: reuse code, render hijacking prop manipulation, abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => ( // Regular component
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => { // regular function that returns HOC
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => { // regular function that returns HOC
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Authentication required</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info); // HOC
const AuthInfo = requireAuthentication(Info); // HOC

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are some details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are some details" />, document.getElementById('app'));