import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import CreateContact from "./components/create-contact.js";
import EditContact from "./components/edit-contact.js";
import ContactList from "./components/contact-list.js";

class App extends Component {
  render() {
    return (
<Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src="" width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Contacts</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={ContactList} />
          <Route path="/edit/:id" component={EditContact} />
          <Route path="/create" component={CreateContact} />
        </div>
      </Router>
    );
  }
}


export default App;
