import React from 'react';
import Container from '@mui/material/Container';
import instagram from '../images/instagram.png';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        fontFamily: '"source-sans-pro", sans-serif'
    },
});

const Footer = () => {
    const greyBackground = '#f0f0f0';
    const email = 'crew.umd@gmail.com';
    const marylandRed = '#de1d26';
  
    return (
    <ThemeProvider theme={theme}>
    <div style={{ background: greyBackground, minHeight: '20vh'}}>
      <Container maxWidth="md" sx={{ background: greyBackground, textAlign: 'center', marginTop: '0px', marginBottom: '0px', padding:'20px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Left Section */}
          <div>
            <Typography variant="body1" sx={{ fontSize: '14px', color: '#2c2a29', fontWeight: 'bold' }}>
                Contact Us:
            </Typography>
            <Typography>
                <Link
                    underline="hover"
                    color="#2c2a29"
                    href={`mailto:${email}`}
                    sx={{ fontSize: '14px' }}
                >
                    {email}
                </Link>
            </Typography>
          </div>
  
          {/* Middle Section (Donate) */}
          {/* <img src={longMaryland} alt="Your Image" style={{ height: '75px', width: 'auto' }} /> */}
          <Button
            disableRipple
            variant="contained"
            sx={{
                backgroundColor: marylandRed,
                fontSize: '1.5rem',
                padding: '16px 24px',
                width: '200px',
                textTransform: 'none',
                '&:hover': {
                backgroundColor: marylandRed, // You can set it to the same color to disable the default hover effect
                },
            }}
          >
            Donate
          </Button>
  
          {/* Right Section (instagram) */}
        <div>
            <a
                href="https://www.instagram.com/marylandrowing/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', boxShadow: 'none' }}
            >
                <img src={instagram} alt="Your Image" style={{ height: '75px', width: 'auto' }} />
            </a>
        </div>
        </Box>
      </Container>
    </div>
    </ThemeProvider>
    );
  };
  

export default Footer;