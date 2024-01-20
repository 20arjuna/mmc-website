import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import FAQItem from "./faq_item";
import faqData from '../static/faq_text.txt';
import ReactMarkdown from 'react-markdown';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import mainImage from '../images/mainpage.png';
import Grid from '@mui/material/Grid';
import joinTeam from '../images/fours.png';
import boathouse from '../images/boathouse.jpg';
import ergroom from '../images/ergroom.jpg';
import regatta from '../images/d3_champs.jpeg';
import funteam from '../images/funteam.JPG';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const handleNavigation = (route) => {
      navigate(route);
      window.scrollTo(0, 0);
    };

    const greyBackground = '#f0f0f0';

    return (
      <div style={{ background: "white", minHeight: '80vh', display: 'flex' }}>
      <Container 
          style={{ 
          background: 'white',  
          marginTop: '90px',
          marginBottom: '30px', 
          borderRadius: '0', 
          boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)' }}
          maxWidth="md"
      >

          {/* <Typography variant="h3" style={{ 
              color: '#2c2a29',  
              marginBottom: '10px', 
              marginTop: '10px',
              fontFamily: '"source-sans-pro", sans-serif',
              fontWeight: '700',
              textAlign: 'center',
              }}
          >
              2024 Maryland Men's Crew
          </Typography> */}

          <div style={{ width: '100%', margin: '20px auto', height: '450px', overflow: 'hidden' }}>
            <img
              src={mainImage}
              alt="home Image"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          <Divider></Divider>
            {/* Join the Team Section */}
            <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
              {/* Left-aligned Image */}
              <img
                src={joinTeam}
                alt="Join the Team"
                style={{
                  width: 'auto',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '15%',
                  marginRight: '20px',
                }}
              />
              {/* Text on the Right */}
              <div>
                <Typography variant="h6" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px', fontWeight: 'bold' }}>
                    Join the Team
                  </Typography>
                <Typography variant="body1" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px' }}>
                  We are actively recruiting for the Spring 2024 season. If you are interested in joining the team, please visit our <Link component={RouterLink} to="/recruiting">recruitment page</Link> to learn more.
                </Typography>
              </div>
            </div>
            <Divider></Divider>

            {/* Our Boathouse Section */}
            <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
              {/* Right-aligned Image */}
              {/* Text on the Left */}
              <div>
                <Typography variant="h6" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px', fontWeight: 'bold' }}>
                  Our Boathouse
                </Typography>
                <Typography variant="body1" style={{textAlign: 'center', margin: '20px 0', maxWidth: '400px' }}>
                  We row out of <Link href="https://www.google.com/maps/dir/University+of+Maryland,+College+Park,+MD/Bladensburg+Waterfront+Park,+Annapolis+Road,+Bladensburg,+MD/@38.9623552,-76.9557746,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89b7c6bd3e9aaaab:0xd48e8bdda5e4da9a!2m2!1d-76.9425543!2d38.9869183!1m5!1m1!1s0x89b7c74066dda7b3:0xb4ed947ae86da71d!2m2!1d-76.939375!2d38.9377957!3e0?entry=ttu">Bladensburg Waterfront Park,</Link> located on the Anacostia River in Bladensburg, Maryland. The park is around a 15 min drive from campus.
                </Typography>
              </div>
              <img
                src={boathouse}
                alt="boathouse"
                style={{
                  width: 'auto',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '15%',
                  marginLeft: 'auto',
                }}
              />
              
            </div>
            <Divider></Divider>

            <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
              {/* Left-aligned Image */}
              
              <img
                src={ergroom}
                alt="Erg room"
                style={{
                  width: 'auto',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '15%',
                  marginRight: '20px',
                }}
              />
              {/* Text on the Right */}
              <div>
                <Typography variant="h6" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px', fontWeight: 'bold' }}>
                    The Erg Room
                  </Typography>
                <Typography variant="body1" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px' }}>
                  When we can't go out on the water, we train at the team's Erg Room in Cole Field House. Training on the erg allows us to put in work off the water and stay in shape during the winter months.
                </Typography>
              </div>
            </div>

            <Divider></Divider>

            <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
              {/* Right-aligned Image */}
              {/* Text on the Left */}
              <div>
                <Typography variant="h6" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px', fontWeight: 'bold' }}>
                  Regattas
                </Typography>
                <Typography variant="body1" style={{textAlign: 'center', margin: '20px 0', maxWidth: '400px' }}>
                  Each season, the team competes at several regattas. They are perfect opportunities for us to show off our hard work while representing UMD. Check out our schedule for the season <Link component={RouterLink} to="/schedule">here</Link>.
                </Typography>
              </div>
              <img
                src={regatta}
                alt="regatta"
                style={{
                  width: 'auto',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '15%',
                  marginLeft: 'auto',
                }}
              />
              
            </div>

            
            <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
              {/* Left-aligned Image */}
              <img
                src={funteam}
                alt="fun Team"
                style={{
                  width: 'auto',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '15%',
                  marginRight: '20px',
                }}
              />
              {/* Text on the Right */}
              <div>
                <Typography variant="h6" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px', fontWeight: 'bold' }}>
                    Social
                  </Typography>
                <Typography variant="body1" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px' }}>
                  When we are not training or competing, we spend plenty of time together as a team. In addition to hanging out around campus, we host social events with other clubs, and a formal at the end of the year. 
                </Typography>
              </div>
            </div>
            <Divider></Divider>
    
              {/* FAQ Section */}


          

      </Container>
      </div>
    )
}

export default Home;