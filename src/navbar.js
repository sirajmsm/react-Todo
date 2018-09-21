import React from 'react';
import {Link} from 'react-router-dom';
export const NavBar =()=>(
  <div class="navbar navbar-dark bg-light">
  <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Navigation
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#"><Link to='/'>Home</Link></a>
    <a class="dropdown-item" href="#"><Link to='/about'>About</Link></a>

  </div>
</div>


  </div>
);