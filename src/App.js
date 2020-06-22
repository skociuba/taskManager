import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import Page from "./page";
import Main from "./components/Main";
import Execute from "./components/Execute";
import Start from "./components/Start";
import Search from "./components/Search";
import Shifts from "./components/Shifts";
import store from "./store";
import { Router, NavLink, Redirect } from "react-router-dom";
import history from "./history";
import "./app.css";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onRef = nav => {
    this.nav = nav;
    M.Sidenav.init(nav); 
  };
  logout = () => {
    setInterval(() => {
      window.location.reload();
    }, 1000);
  };

  render() {
    let { isLoginSuccess } = this.props.isLoginSuccess;

    const logIn = (
      <Fragment>
        {" "}
        <li>
          <Redirect to="/Main" exact style={{ color: "white" }}>
            TASK MANAGER
          </Redirect>
        </li>
        <li>
          <NavLink to="/Main" exact style={{ color: "white" }}>
            TASK MANAGER
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/Search" exact style={{ color: "white" }}>
            SEARCH
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/Execute" exact style={{ color: "white" }}>
            EXECUTE
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/Shifts" exact style={{ color: "white" }}>
            SHIFTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            exact
            style={{ color: "#FF5601" }}
            onClick={this.logout.bind(this)}
          >
            LOGOUT
          </NavLink>
        </li>{" "}
      </Fragment>
    );
    const start = (
      <li>
        <NavLink to="/" exact activeStyle={{ color: "white" }}>
          MAIN PAGE
        </NavLink>
      </li>
    );
    const logOut = <Redirect to={start} />;
    return (
      <Page>
        <Provider store={store}>
          <Router history={history}>
        
            <nav className="nav-wrapper grey darken-3">
            <a href="#!"  data-target="mobile-demo" className="sidenav-trigger">
                  <i className="material-icons">menu</i></a>
                    <ul  className="right hide-on-med-and-down">
                      <ul className="right">{isLoginSuccess ? logIn : logOut}</ul>
                  </ul>
            </nav>

            <ul ref={this.onRef} className="sidenav" id="mobile-demo">
            <div className ="sidenav-close"> {isLoginSuccess ? logIn : logOut}</div>
            </ul>

            <Route path="/" exact strict component={Start} />
            <Route path="/Main" exact strict component={Main} />
            <Route path="/Execute" exact strict component={Execute} />
            <Route path="/Search" exact strict component={Search} />
            <Route path="/Shifts" exact strict component={Shifts} />
          </Router>
        </Provider>
      </Page>
    );
  }
}
App.propTypes = {
  isLoginSuccess: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    isLoginSuccess: state.isLoginSuccess
  };
};

export default connect(mapStateToProps)(App);
