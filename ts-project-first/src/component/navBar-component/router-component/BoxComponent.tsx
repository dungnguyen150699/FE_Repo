import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from 'react-router-dom';
import Box from '@mui/material/Box';
import {page} from '../../../types/page'


function BoxComponent(props : {
    sx :{
        p: number,
    },
    page :page
}){
    let {sx,page} = props;
    return (
        <Box sx={sx} className="boxComponent">
            <Link to={page.link} className={useLocation().pathname != page.link ? "link" : "link linkActive"}>
                {page.name} &nbsp;  {page.icon}
            </Link>
        </Box>
    )
}

export default BoxComponent;