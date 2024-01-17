// Roster.js
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import john from '../images/johndoe.jpeg';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';



//import { Grid } from '@material-ui/core';
// import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@material-ui/core';


const Roster = () => {
  const rosterData = [
    { id: 1, name: 'Arjun Akkiraju', year: 'Senior', major: 'Computer Science', hometown: 'Saratoga, Calif.', highschool: 'The Harker School', photo: john },
    { id: 2, name: 'Graham Elmore', year: 'Sophomore', major: 'Mechanical Engineering', hometown: 'Annapolis, Md.', highschool: 'Broadneck', photo: john },
    { id: 3, name: 'Onur Gunduz', year: 'Sophomore', major: 'Computer Science', hometown: 'Fairfax, Va.', highschool: 'Thomas Jefferson', photo: john },
    { id: 4, name: 'Prabhat Jain', year: 'Freshman', major: 'Computer Science', hometown: 'Sykesville, Md.', highschool: 'Century', photo: john },
    { id: 5, name: 'Peter Micciche', year: 'Sophomore', major: 'Economics & Finance', hometown: 'Lanacaster, Pa.', highschool: 'Friends School of Baltimore', photo: john },
    { id: 6, name: 'Braden Nowicki', year: 'Sophomore', major: 'Astronomy & Computer Science', hometown: 'Reading, Mass.', highschool: 'Reading Memorial', photo: john },
    { id: 7, name: 'Arjun Pinto', year: 'Freshman', major: 'Mechanical Engineering', hometown: 'Baltimore, Md.', highschool: 'Mount Saint Joseph', photo: john },
    { id: 8, name: 'Connor Pymm', year: 'Junior', major: 'Computer Science', hometown: 'Ellicot City, Md.', highschool: 'Centennial', photo: john },
    { id: 9, name: 'AJ Robey', year: 'Freshman', major: 'Physiology & Neurobiology', hometown: 'Poolesville, Md.', highschool: 'Poolesville', photo: john },
    { id: 10, name: 'Anthony van Rheenan', year: 'Freshman', major: 'Computer Science', hometown: 'Vienna, Va.', highschool: 'Thomas Jefferson', photo: john },

    // Add more rower data as needed
  ];

  const numRowers = rosterData.length;

  return (
    <div style={{ background: '#f0f0f0', minHeight: '100vh', display: 'flex',  alignItems: 'center' }}>
      <Container style={{ background: 'white', width: '80%', marginTop: '90px', marginBottom: '30px', borderRadius: '0', boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h6" style={{ 
          color: '#2c2a29',  
          marginBottom: '10px', 
          marginTop: '20px',
          fontFamily: '"source-sans-pro", sans-serif',
          fontWeight: '700',

           }}>2023-24 Roster</Typography>
        
        <Divider></Divider>
        {rosterData.map((rower) => (
          <Card key={rower.id} 
            style={{ background: rower.id % 2 === 0 ? '#f0f0f0' : 'white', 
            marginBottom: rower.id === numRowers ? '20px' : '0px', 
            display: 'flex', 
            alignItems: 'center', 
            boxShadow: '0 0px 5px rgba(0, 0, 0, 0)' }}>
              <CardMedia
                component="img"
                alt={rower.name}
              //   height="140"
                image={rower.photo}
                style={{ width: '7%', objectFit: 'cover',  marginLeft: '20px', marginTop: '20px', marginBottom: '20px', marginRight: '20px' }}
              />
              {/* <CardContent style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}> */}
              <CardContent style={{alignItems: 'center' }}>
                <Typography variant="body1" style={{ fontSize: '18px',color: '#666666', fontWeight: '700', fontFamily: '"source-sans-pro", sans-serif' }}>{rower.name}</Typography>
                {/* <CardContent style={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-end' }}>
                  <Typography variant="body2" color="textSecondary">{rower.year}</Typography>
                </CardContent> */}
              </CardContent>
              <CardContent style={{ display:'flex', flexDirection:'row', marginLeft: 'auto', marginRight: '0px', alignItems: 'center' }}>
                  {/* <Typography variant="body1" style={{fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', fontWeight: '700', color: '#2c2a29', fontStyle: 'italic', width: '60px'}}>{rower.year}&nbsp;</Typography>
                  <Typography variant="body1" style={{fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', fontWeight: '400', color: '#2c2a29', width: '375px'}}> / {rower.major} / {rower.hometown} / {rower.highschool}</Typography> */}
                  <Typography variant="body1" style={{ fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', color: '#2c2a29', width: '450px' }}>
                    <span style={{ fontWeight: '700', fontStyle: 'italic' }}>{rower.year}&nbsp;</span>
                    / {rower.major} / {rower.hometown} / {rower.highschool}
                  </Typography>
                  
              </CardContent>
            
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Roster;