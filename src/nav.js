import React from 'react';

export default class Nav extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-md">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 mx-3 fixed-top">
            {this.props.children}
          </nav>
        </div>
      </div>
    );
  }
}
