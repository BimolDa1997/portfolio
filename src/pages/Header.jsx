import react from 'react'
import './../css/Header.css'
import { Link } from 'react-router-dom'
import Home from './home'
function Header(){
    return(
        <div className='Header'>
            
<html lang="en"/>


  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

  <title>Bimol Das - Software Engineer</title>
  <meta content="" name="description"/>
  <meta content="" name="keywords"/>

  <link href="assets/img/favicon.png" rel="icon"/>
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

  <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
  <link href="assets/css/style.css" rel="stylesheet"/>  
  <header id="header">
  <div class="d-flex flex-column">

    <div class="profile">
      <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle"/>
      <h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
      <div class="social-links mt-3 text-center">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>

    <nav id="navbar" class="nav-menu navbar">
      <ul>
      
        <li><Link to={'/'}><i class="bx bx-home"></i> Home</Link></li>
        <li><Link to={'/about'}><i class="bx bx-user"></i>About</Link></li>
        <li><Link to={'/resume'}><i class="bx bx-file-blank"></i> Resume</Link></li>
        <li><Link to={'/portfolio'}><i class="bx bx-book-content"></i> Portfolio</Link></li>
        <li><Link to={'/service'}><i class="bx bx-server"></i>Services</Link></li>
        <li><Link to={'/contact'}><i class="bx bx-envelope"></i> Contact</Link></li>
      </ul>
    </nav>
  </div>
</header>
  
        </div>
    )
}

export default Header