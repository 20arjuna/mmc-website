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

const Roster = () => {
    // Local state for rosterData
    const [rosterData, setRosterData] = useState([
      { id: 1, name: 'John Doe', year: 'Senior', major: 'Computer Science', photo: john },
      // Add more rower data as needed
    ]);
  
    return (
      <div>
        <h1>Your Roster</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Photo</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Major</TableCell>
                {/* Add more columns as needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rosterData.map((rower) => (
                <TableRow key={rower.id}>
                  <TableCell>
                    <img src={rower.photo} alt={rower.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                  </TableCell>
                  <TableCell>{rower.name}</TableCell>
                  <TableCell>{rower.year}</TableCell>
                  <TableCell>{rower.major}</TableCell>
                  {/* Add more cells for additional information */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default Roster;