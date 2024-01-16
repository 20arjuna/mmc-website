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

// const Roster = () => {
//     // Local state for rosterData
//     const [rosterData, setRosterData] = useState([
//       { id: 1, name: 'John Doe', year: 'Senior', major: 'Computer Science', photo: john },
//       // Add more rower data as needed
//     ]);
  
//     return (
//       <div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <h3 style={{ paddingLeft: '5%', fontSize: '1.2em', marginBottom: '20px' }}>Your Roster</h3>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableBody>
//               {rosterData.map((rower) => (
//                 <TableRow key={rower.id}>
//                   <TableCell>
//                     <img src={rower.photo} alt={rower.name} style={{ width:'25%',borderRadius: '50%' }} />
                    
//                   </TableCell>
//                   <TableCell>{rower.name}</TableCell>
//                   <TableCell>{rower.year}</TableCell>
//                   <TableCell>{rower.major}</TableCell>
//                   {/* Add more cells for additional information */}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     );
//   };
  
//   export default Roster;


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
//import { Grid } from '@material-ui/core';
// import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@material-ui/core';


const Roster = () => {
  const rosterData = [
    { id: 1, name: 'Kannan Alford', year: 'Senior', major: 'Computer Science', hometown: 'Baltimore, Md.', highschool: 'Poolesville', photo: john },
    { id: 2, name: 'Kannan Alford', year: 'Senior', major: 'Computer Science', hometown: 'Baltimore, Md.', highschool: 'Poolesville', photo: john },
    { id: 3, name: 'Kannan Alford', year: 'Senior', major: 'Computer Science', hometown: 'Baltimore, Md.', highschool: 'Poolesville', photo: john },
    { id: 4, name: 'Kannan Alford', year: 'Senior', major: 'Computer Science', hometown: 'Baltimore, Md.', highschool: 'Poolesville', photo: john },
    { id: 5, name: 'Kannan Alford', year: 'Senior', major: 'Computer Science', hometown: 'Baltimore, Md.', highschool: 'Poolesville', photo: john },
    { id: 6, name: 'Kannan Alford', year: 'Senior', major: 'Computer Science', hometown: 'Baltimore, Md.', highschool: 'Poolesville', photo: john },
    { id: 7, name: 'Kannan Alford', year: 'Senior', major: 'Computer Science', hometown: 'Baltimore, Md.', highschool: 'Poolesville', photo: john },

    // Add more rower data as needed
  ];

  return (
    <div style={{ background: '#f0f0f0', minHeight: '100vh', display: 'flex',  alignItems: 'center' }}>
      <Container style={{ background: 'white', width: '80%', marginTop: '90px', marginBottom: '30px', borderRadius: '0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>2023-24 Roster</Typography>
        {rosterData.map((rower) => (
          <Card key={rower.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <CardMedia
              component="img"
              alt={rower.name}
            //   height="140"
              image={rower.photo}
              style={{ width: '7%', objectFit: 'cover',  marginLeft: '20px', marginTop: '20px', marginBottom: '20px', marginRight: '20px' }}
            />
            {/* <CardContent style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}> */}
            <CardContent style={{alignItems: 'center' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold', color: 'grey' }}>{rower.name}</Typography>
              {/* <CardContent style={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-end' }}>
                <Typography variant="body2" color="textSecondary">{rower.year}</Typography>
              </CardContent> */}
            </CardContent>
            <CardContent style={{ marginLeft: 'auto', marginRight: '20px', alignItems: 'center' }}>
                <Typography variant="body4" color="black">{rower.year} / {rower.major} / {rower.hometown} / {rower.highschool}</Typography>
                
            </CardContent>
            
            

          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Roster;