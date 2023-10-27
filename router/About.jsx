import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      I m about us page
      <Link to="/About/About1">about1 </Link>
      <Link to="/About/About2">about2</Link>
      <Outlet/>
    </div>
  )
}

export default About;
