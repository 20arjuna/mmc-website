import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const handleNavigation = (route) => {
      navigate(route);
      window.scrollTo(0, 0);
    };

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1 sx={{color: "black"}}>Home</h1>
        </div>
    )
}

export default Home;