import React, { Component, useEffect } from 'react';
import { Location, redirect, useLocation, useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constant';

function getUrlParameter(name:any) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default function OAuth2RedirectHandler() {
    const location:Location = useLocation();
    const navigate = useNavigate();
    // const redirect = redirect

    useEffect(()=>{
            const token = getUrlParameter('token');
            const error = getUrlParameter('error');
            if(token){
                localStorage.setItem(ACCESS_TOKEN, token);
                // console.log("set Token")
                // navigate('/book');
            }else{
                navigate('/login');
            }
    },[])
    return (
        <div>
        </div>
      );

}