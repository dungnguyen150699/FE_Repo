import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import fbLogo from '../../img/fb-logo.png';
import bookImg from '../../img/book.jpg';

export default function BookComponent(){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
    return (
        <Container maxWidth="xl" style={{marginTop:"50px"}}>
            <Grid container spacing={2}>
                {
                    
                }
                <Grid item xs={3}>
                    <img src={bookImg} style={
                        {
                            width: '235px',
                            height: '220px'
                        }
                } ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src={bookImg} style={
                        {
                            width: '235px',
                            height: '220px'
                        }
                } ></img>
                
                </Grid>
                <Grid item xs={3}>
                    <img src={bookImg} style={
                        {
                            width: '235px',
                            height: '220px'
                        }
                } ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src={bookImg} style={
                        {
                            width: '235px',
                            height: '220px'
                        }
                } ></img>
                </Grid>
                <Grid item xs={3}>
                    <img src={bookImg} style={
                        {
                            width: '235px',
                            height: '220px'
                        }
                } ></img>
                </Grid>
                
            </Grid>
        </Container>
    )
}