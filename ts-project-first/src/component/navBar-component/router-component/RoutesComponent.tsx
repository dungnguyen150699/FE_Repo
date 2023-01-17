import {
    BrowserRouter as Router,
    Routes,
    Route,
    redirect,
    Navigate,
    useNavigate 
} from 'react-router-dom';
import {pages} from './data';
import { page } from '../../../types/page';
import Login from '../../../login/Login';
import Signup from '../../../signup/Signup';
import { ACCESS_TOKEN } from '../../../constant';
import React,{ useEffect } from 'react';
import OAuth2RedirectHandler from '../../../login/OAuth2RedirectHandler';

export default function RoutesComponent(){
    return (
        <Routes>
            {pages.map((page:page,index:number) =>
                (<Route path={page.link} element={page.element} key={index}></Route>)
            )}
            <Route path="oauth2/redirect" element={<OAuth2RedirectHandler/>} key={'oauth2-redirect'}></Route>
            <Route path="/login" element={<Login location={undefined} history={undefined} authenticated={undefined}/>} key={'login'}></Route>
            <Route path="/signup" element={<Signup/>} key={'signup'}></Route>
        </Routes>
    )
}