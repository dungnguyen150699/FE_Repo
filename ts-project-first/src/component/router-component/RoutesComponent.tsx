import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import BookComponent from '../book-component/BookComponent';
import AboutComponent from '../book-component/AboutComponent';

export default function RoutesComponent(){
    return (
            <Routes>
                <Route path='/' element={< BookComponent/>}></Route>
                <Route path='/about' element={< AboutComponent/>}></Route>
            </Routes>
    )
}