import React, { Component } from 'react';
import Task from './Task';
import {connect} from 'react-redux';
import * as action from './../actions/index.js';

class Tasks extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks : []
        };
    }
    
    // componentDidMount =() =>{
    //     this.props.getListAll();
    // }   
    
    
    render() {
        var {todos,actions,dispatch} = this.props;
        console.log("todos: --- ",todos);
        console.log("actions: ----", actions);
        console.log("dispatch: ----", dispatch); 
        /*
         Ngoài ra nếu ko sử dụng mapDispatchToProps thì có thể dùng
         <button onClick={() => dispatch(action.list_All())}>testDispatch<button/></button>
        */
        var EleTask = todos.map((task,index)=>{
            return(
                <Task
                    task={task}
                    key={index}
                />
            )
        })
        return (      
            <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover" style={style}>
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                        <tr>
                            <td><button onClick={() => dispatch(action.list_All())}>testDispatch<button/></button></td>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <select className="form-control">
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                        <td></td>
                    </tr>
                    </thead>
                    {/* Task  */}
                        {EleTask}
                </table>
            </div>
        </div>
        )
    }
}
const style = {
    textAlign: "center"
}

const mapStateToProps = (state) =>{ //cái này lấy hành động theo trạng thái mới nhất của redux // ko truyền cái nào thì nó lấy default thôi
    return{
        todos : state.tasks // state.tasks o combine_reducer
    }
};

// const mapDispatchToProps = (dispatch, props)=>{ // Cái này truyền hành động xuống redux
//     return{
//         getListAll : () =>{
//            dispatch(action.list_All());
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
export default connect(mapStateToProps)(Tasks);