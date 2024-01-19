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
import { useNavigate } from 'react-router-dom';

//images
import ergsprints from '../images/ErgSprints.jpg';


const Schedule = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };


  const scheduleData = [
    { id: 1, name: 'Alexandria Erg Sprints', date: 'Feb 3 (Sun)', location: 'Alexandria, Va.', link: 'https://www.ergsprints.com/event-details', photo: ergsprints },
    // { id: 2, name: 'Graham Elmore', year: 'Sophomore', major: 'Mechanical Engineering', hometown: 'Annapolis, Md.', highschool: 'Broadneck', height: "6'0\"", position: "Port", photo: john },
    // { id: 3, name: 'Onur Gunduz', year: 'Sophomore', major: 'Computer Science', hometown: 'Fairfax, Va.', highschool: 'Thomas Jefferson', height: "5'11\"", position: "Port", photo: john },
    // { id: 4, name: 'Prabhat Jain', year: 'Freshman', major: 'Computer Science', hometown: 'Sykesville, Md.', highschool: 'Century', height: "5'9\"", position: "Starboard", photo: john },
    // { id: 5, name: 'Derrick Jones', year: 'Freshman', major: 'Undeclared', hometown: 'Upper Marlboro, Md.', highschool: 'Oxon Hill', height: "5'5\"", position: "Coxswain", photo: john },
    // { id: 6, name: 'Peter Micciche', year: 'Sophomore', major: 'Economics & Finance', hometown: 'Lancaster, Pa.', highschool: 'Friends School of Baltimore', height: "6'0\"", position: "Port", photo: john },
    // { id: 7, name: 'Braden Nowicki', year: 'Sophomore', major: 'Astronomy & Computer Science', hometown: 'Reading, Mass.', highschool: 'Reading Memorial', height: "6'0\"", position: "Starboard", photo: john },
    // { id: 8, name: 'Arjun Pinto', year: 'Freshman', major: 'Mechanical Engineering', hometown: 'Baltimore, Md.', highschool: 'Mount Saint Joseph', height: "5'8\"", position: "Starboard", photo: john },
    // { id: 9, name: 'Connor Pymm', year: 'Junior', major: 'Computer Science', hometown: 'Ellicott City, Md.', highschool: 'Centennial', height: "6'0\"", position: "Port", photo: john },
    // { id: 10, name: 'AJ Robey', year: 'Freshman', major: 'Physiology & Neurobiology', hometown: 'Poolesville, Md.', highschool: 'Poolesville', height: "5'5\"", position: "Port", photo: john },
    // { id: 11, name: 'Anthony van Rheenan', year: 'Freshman', major: 'Computer Science', hometown: 'Vienna, Va.', highschool: 'Thomas Jefferson', height: "6'2\"", position: "Port", photo: john },
  ];

  
  // const ResponsiveContainer = styled(Container)(({ theme }) => ({
  //   background: 'white',
  //   width: '80%',
  //   marginTop: '90px',
  //   marginBottom: '30px',
  //   borderRadius: '0',
  //   boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
  //   [theme.breakpoints.down('sm')]: {
  //     maxWidth: 'lg',
  //   },
  // }));
  

  const numRaces = scheduleData.length;
  const greyBackground = '#f0f0f0'
  const isXsScreen = useMediaQuery('(max-width:600px)');

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
      {/* <ResponsiveContainer> */}
        <Typography variant="h6" style={{ 
          color: '#2c2a29',  
          marginBottom: '10px', 
          marginTop: '10px',
          fontFamily: '"source-sans-pro", sans-serif',
          fontWeight: '700',
          }}
          >Spring 2024 Schedule</Typography>
        
        <Divider></Divider>
        {scheduleData.map((race) => (
          <Card key={race.id} 
            style={{ background: race.id % 2 === 0 ? '#f0f0f0' : 'white', 
            marginBottom: race.id === numRaces ? '20px' : '0px', 
            display: 'flex', 
            alignItems: 'center', 
            boxShadow: '0 0px 5px rgba(0, 0, 0, 0)' }}>
              <CardMedia
                component="img"
                alt={race.name}
              //   height="140"
                image={race.photo}
                style={{ width: '90px', objectFit: 'cover',  marginLeft: '20px', marginTop: '20px', marginBottom: '20px', marginRight: '20px' }}
              />

              


              {isXsScreen ? (
                <CardContent style={{alignItems: 'center' }}>
                  <Typography variant="body2" style={{ fontSize: '12px', color: '#2c2a29', fontFamily: '"source-sans-pro", sans-serif' }}>
                    {race.date}
                  </Typography>
                  <Link to={race.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", boxShadow: "none"}}>
                    <Typography variant="body1" style={{ fontSize: '18px',color: '#2c2a29', fontWeight: '700', fontFamily: '"source-sans-pro", sans-serif' }}>
                        {race.name}
                    </Typography>
                   </Link>
                  <Typography variant="body1" style={{ fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', color: '#2c2a29', width: '100%' }}>
                    {race.location}
                  </Typography>
                </CardContent>
              ) : (
                <><CardContent style={{}}>
                  <Typography variant="body2" style={{ fontSize: '12px', color: '#2c2a29', fontFamily: '"source-sans-pro", sans-serif' }}>
                    {race.date}
                  </Typography>
                  <Link to={race.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", boxShadow: "none"}}>
                    <Typography variant="body1" style={{ fontSize: '18px',color: '#2c2a29', fontWeight: '700', fontFamily: '"source-sans-pro", sans-serif' }}>
                        {race.name}
                    </Typography>
                   </Link>
                </CardContent>
                <CardContent style={{ marginLeft: 'auto', marginRight: '-50px', alignItems: 'center' }}>
                  <Typography>&nbsp;&nbsp;</Typography>
                  <Typography variant="body1" style={{ fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', color: '#2c2a29', width: '450px' }}>
                    {race.location}
                  </Typography>
                </CardContent></>
                
              )}
            
          </Card>
        ))}
        <Divider></Divider>
      </Container>
      
    </div>
  );
};


export default Schedule;