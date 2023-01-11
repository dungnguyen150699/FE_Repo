import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Box from '@mui/material/Box';
import { render } from '@testing-library/react';

function BoxComponent(props : any){
    let {index,sx,page} = props;

    return (
        <Box key={index} sx={sx}>
            <Link to={page.link}>{page.name}</Link>
        </Box>
    )
}

export default BoxComponent;