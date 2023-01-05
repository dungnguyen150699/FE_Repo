import React, { Component } from 'react';
import { BrowserRouter as Router,  Routes,  Route,  Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">SHOP</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/users">Users <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">Products </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
  }
}
