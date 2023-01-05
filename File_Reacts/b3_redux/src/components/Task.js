import React, { Component } from 'react'

export default class task extends Component {
    constructor(props){
        super(props)
        this.state={
            task : null
        }
        console.log(this.props);
    }
    render() {
        var {task} = this.props;
        return (
            <tbody>
                <tr>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                    {task.status ? (<span className="label label-success"> Kich hoat </span>)
                     : <span className="label label-danger"> An </span> } 
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <span className="fa fa-pencil mr-5"></span>Sửa
                        </button>
                        &nbsp;
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
                    </td>
                </tr>
            </tbody>
        )
    }
}
