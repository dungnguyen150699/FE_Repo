import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import {pages} from './data';
import { page } from '../../../types/page';

export default function RoutesComponent(){

    return (
        <Routes>
            {pages.map((page:page,index:number) =>
                (<Route path={page.link} element={page.element} key={index}></Route>)
            )}
        </Routes>
    )
}