import React, { Component } from "react";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="http://frontend.jjj0.shop" className="navbar-brand">
                JJJ - TEST
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
