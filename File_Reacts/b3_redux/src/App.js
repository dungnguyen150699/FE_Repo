import React, { Component } from 'react'
import FormTask from './components/FormTask.js';
import Tasks from './components/Tasks.js'
import Controller from './components/Controller.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      task : [],
      isDisplayForm : false,
      keyword : '',
      filterName : '',
      filterStatus : '',
      itemEditing : null,
      sortBy : 'name',
      sortValue : 1
    };
  }

  render() {
    return (
      <div>
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                {/* <!-- form --> */}
                <FormTask/>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                {/* control   */}
                <Controller/>
                {/* tasks */}
                <Tasks/>
            </div>
        </div>
      </div>
    )
  }
}