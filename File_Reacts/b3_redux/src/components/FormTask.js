import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from './../actions/index.js';

class FormTask extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            status: true
        }
    }

    onHandleChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name] : value
        })
    }

    onHandleSubmit = (event) =>{
        event.preventDefault();
        this.props.onAddTask(this.state);
    }

    render() {
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={(e)=>this.onHandleSubmit(e)}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                type="text" 
                                name="name" 
                                value={this.state.name} 
                                onChange={(e)=>this.onHandleChange(e)} 
                                className="form-control"
                                 />
                            </div>
                            <label>Trạng Thái :</label>
                            <select 
                            className="form-control" 
                            name="status" 
                            value={this.state.status} 
                            onChange={(e)=>this.onHandleChange(e)} 
                            required="required">
                                <option value="1">Kích Hoạt</option>
                                <option value="0">Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        
    }
};

const mapDispatchToProps = ( dispatch, props)=>{
    return{
        onAddTask : (task) =>{
            dispatch(action.addTask(task));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FormTask);