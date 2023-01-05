import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import Users from "./Admin/User";
import Products from "./Admin/Product";
import FormProduct from './Admin/FormProduct';

export default class CRoutes extends Component {
  render() {
    return (
    <div>
        <Routes>
          <Route exact  path="/users" element={<Users/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/formProducts" element={<FormProduct/>} />
          <Route path="/products/formProducts" element={<FormProduct/>} />
        </Routes>
    </div>);
  }
}
