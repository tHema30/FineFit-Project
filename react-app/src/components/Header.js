import React from 'react';


function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
    <a href="/">
        <img  src={require('../assets/img/Screenshot_from_2024-01-07_20-49-32-removebg-preview.png')} alt='logo'  height="70"/>
    </a>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" class="nav-item nav-link active">Home</a>
            <a href="1" class="nav-item nav-link">About Us</a>
            <a href="1" class="nav-item nav-link">How It's work</a>
            <div class="nav-item dropdown">
                <a href="1" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                <div class="dropdown-menu m-0">
                    <a href="1" class="dropdown-item">Gents</a>
                    <a href="1" class="dropdown-item">Ladies</a>
                    <a href="1" class="dropdown-item">Kids</a>
                     <a href="1" class="dropdown-item">Altering</a>
                </div>
            </div>
            <a href="1" class="nav-item nav-link">Contact Us</a>
        </div>
        <div class="d-none d-lg-flex ms-2">
            
        <a class="-sm-square bg-white rounded- ms-3"href="/login" onclick="myFunction()"/>
    <small class="fa fa-user text-body"></small>
     
   
            <a class="btn-sm-square bg-white rounded-circle ms-3" href="/login">
                <small class="fa fa-shopping-bag text-body"></small>
            </a>
        </div>
    </div>
</nav>

  );
}

function myFunction() {
    // Your code here
    alert('Login button was clicked!');
}

export default Header;