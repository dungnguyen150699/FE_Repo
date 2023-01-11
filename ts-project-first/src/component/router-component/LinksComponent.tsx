import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Box from '@mui/material/Box';
import BookComponent from '../book-component/BookComponent';
import { render } from '@testing-library/react';


export default function LinksComponent(){
    const pages : {
        name : string,
        link : string
    }[] = [
        {
            name : "Book",
            link : "/"
        }
    ];

    function BoxElement(): React.FC<Props> = (props: Props) {
        return (
            <div>
                { 
                 pages.map((page,index) => 
                <Box key={index} sx={{ p: 2, border: '1px dashed grey' }}>
                    <Link to={page.link}>{page.name}</Link>
                </Box>
                }
            </div>    )
    };

    return (
        <Routes>
            {
            pages.pages.map((page,index) => 
            <BookComponent key={index} sx={{ p: 2, border: '1px dashed grey' }}></BookComponent>
            )
            }
        </Routes>
    )
}