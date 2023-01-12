import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Box from '@mui/material/Box';
import {page} from '../../../types/page'
function BoxComponent(props : {
   
    sx :{
        p: number,
        // border: string
    },
    page :page
}){
    let {sx,page} = props;

    return (
        <Box sx={sx} className="xx">
            <Link to={page.link} className="link">{page.name}</Link>
        </Box>
    )
}

export default BoxComponent;