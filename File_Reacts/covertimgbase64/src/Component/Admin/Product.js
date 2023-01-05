import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Product (props) {
    const [products,setProducts] =  useState([]);
    const [pages,setpages] = useState({
        currentPage : 0,
        size : 8,
        totalItotalPages: 3
    })

    useEffect (()=>{
        // didmount
        let url = "http://localhost:8080/product/getAll?page=0&size=8";
        fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // body: JSON.stringify(),// body data type must match "Content-Type" header
          })
          .then(response => {
            console.log(response.status);
            return response.json();
          })
          .then(data => {
            console.log("GetAll Result",data);
            setProducts(data.content)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        return{
            // unmount
        }
    },[]);

    function deleteProduct(){

    }

    function showProduct(){
      return products.map(function(p,index){
        return (
        <tr key={p.id}>
            <td>{p.name}</td>
            <td><img src={`data:image/jpeg;base64,${p.img}`} height="100px" width="100px"/></td>
            <td>{p.price}</td>
            <td>{p.count}</td>
            <td>
            <Link to={`formProducts?id=${p.id}`}><button type="button" className="btn btn-primary">Modify</button></Link>
            &nbsp;
            <button type="button" onClick={deleteProduct()} className="btn btn-danger">Delete</button>
            </td>
        </tr> 
        )
    })
  }
    return( 
    <div>
        <Link to="/formProducts"><button type="button" className="btn btn-primary">Add</button></Link>
        <br/>
        <table className="table table-striped">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {showProduct()}
              </tbody>
        </table>
      <div class="dropdown">
        <button type="button" height="75px" width="75px">&laquo;</button>
        <button type="button" height="75px" width="75px">&lsaquo;</button>
        
        <button type="button" height="75px" width="75px">&rsaquo;</button>
        <button type="button" height="75px" width="75px">&raquo;</button>
      </div>
      <br/><br/><br/>
    </div>
    )
}
