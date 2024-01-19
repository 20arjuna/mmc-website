// Schedule.js
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";

const Faq = () => {

    const greyBackground = '#f0f0f0'

    return (
        <div style={{ background: greyBackground, minHeight: '80vh', display: 'flex' }}>
            <Container 
                style={{ 
                background: 'white',  
                marginTop: '90px',
                marginBottom: '30px', 
                borderRadius: '0', 
                boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)' }}
                maxWidth="md"
            >

                <Typography variant="h6" style={{ 
                    color: '#2c2a29',  
                    marginBottom: '10px', 
                    marginTop: '10px',
                    fontFamily: '"source-sans-pro", sans-serif',
                    fontWeight: '700',
                    }}
                >
                    Frequently Asked Questions
                </Typography>
        
        <Divider></Divider>


            </Container>
        </div>
    )
}

export default Faq;