import React, { useState,useEffect } from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

export default function FormProduct(props) {
      const[product,setProduct] = useState({
        id: null,
        name : "",
        img : null,
        price: 0,
        count: 0
      });

      const [imgShow,setImgShow] = useState("");

      const uploadImage = async (e) => {
        const file = await e.target.files[0];
        const base64 = await convertBase64(file);
        console.log(file)
        setProduct({
          ...product,
          img:file
        })
        setImgShow(base64);
      };
    
      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

      const onHandleSumbit = async(e) =>{
        await e.preventDefault();
        // console.log("xxxx");
        if(product.id===null){
          const formData = new FormData();
          formData.append('img', product.img);
          formData.append('name', product.name);
          formData.append('count', product.count);
          formData.append('price', product.price);
            let url = `http://localhost:8080/product/create`;
          fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              body: formData,// body data type must match "Content-Type" header
            })
            .then((response)=>{
              console.log(response.status);
              return response.json();
            })
            .then(data => {
              console.log("product",data);
              setProduct({
                ...product,
                id:data.id,
                img:data.img
              })
            })
            .catch((error) => {
              console.error('Error create:', error);
            });
        }
        else{
          let url = "http://localhost:8080/product/update/"+product.id;
        fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(product),// body data type must match "Content-Type" header
          })
          .then(response => response.json())
          .then(data => {
            console.log(data.message);
          })
          .catch((error) => {
            console.error('Error create:', error);
          });
        }
        
      }
      
    const [searchParam,setParam] = useSearchParams() ;

    useEffect(()=>{
      console.log(searchParam.get('id'));
      if(searchParam.get('id')){
        let url = "http://localhost:8080/product/getById/"+searchParam.get('id');
        fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
           // body: JSON.stringify(product),// body data type must match "Content-Type" header
          })
          .then((response) => {
            console.log(response.status);
            return response.json();
          })
          .then(data => {
            console.log(data);
            setProduct({
                id:data.id,
                name:data.name,
                price:data.price,
                img:data.img,
                count:data.count
            })
          })
          .catch((error) => {
            console.error('Error finBYID:', error);
          });
      }
  },[]);

      const onHandleChange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setProduct({
            ...product,
            [name] : value
        })
      }
    return(
    <div>
      {product.id===null ? <h3>Creating Product</h3> : <h3>Updating Product with ID:{product.id}</h3>}
        <div className="form-group">
          <form onSubmit={(e)=>onHandleSumbit(e)} encType="multipart/form-data">
            <label >Name</label>
            <input type="text" value={product.name} onChange={(e)=> onHandleChange(e)} className="form-control" name="name" aria-describedby="helpId" placeholder=""/>
            <label >Image</label>
            <div className="row">
                <div className="col-6">
                    <input
                    type="file"
                    onChange={(e) => {
                    uploadImage(e);
                    }} />
                </div>
                <div className="col-6">
                    <img src={product.id === null ? imgShow : `data:image/jpeg;base64,${product.img}`} height={product.img===null ? "0px" : "200px" } width={product.img===null ? "0px" : "150px" } />
                </div>
            </div>
            <label >Price</label>
            <input type="number" onChange={(e)=> onHandleChange(e)} value={product.price} className="form-control" name="price" min="0" step="1" />
            <label >Count</label>
            <input type="number" onChange={(e)=> onHandleChange(e)} value={product.count} className="form-control" name="count" min="0" step="1" />
            <br/>
            <button type="submit" className="btn btn-primary" >Submit</button>
         </form>
        </div>
        {product.id ? (<div className="alert alert-success">
            <strong>Create Product Success!</strong> 
        </div>) : ""}
        
    </div>
    )
}

