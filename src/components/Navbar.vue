<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-dark p-3 fixed-top">
        <div class="container-fluid">
            <div class="spinner">
                <span>Y</span>
                <span>C</span>
                <span>O</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto  text-center">
              <li class="nav-item">
              	<router-link to="/">Home</router-link>
              </li>
              <br>
              <li class="nav-item">
              	<router-link to="/about">About</router-link>
              </li>
              <br>
              <li class="nav-item">
              	<router-link to="/resume">Resume</router-link>	
              </li>
              <br>
              <li class="nav-item">
                	<router-link to="/skills">Skills</router-link>
              </li>
              <br>
              <li class="nav-item">
                	<router-link to="/projects">Projects</router-link>
              </li>
              <br>
              <li class="nav-item">
                	<router-link to="/testimonial">Testimonials</router-link>
              </li>
              <br>
              <li class="nav-item">
                	<router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style>

.navbar {
  padding: 30px;
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100px;
}

nav a {
  font-weight: bold;
  font-size: larger;
  color: white;
  margin: 0;
  padding: 5px;
  text-decoration: none;
  padding-bottom: 2%;
}
nav {
 border-bottom: 2px solid white;
}
nav a:hover{
    color: gray;
}

nav a.router-link-exact-active {
   color: rgb(213, 57, 0);
}

#icon{
    color: white;
}

@media only screen and (min-width:320px)  and (max-width: 320px) {

}
.navbar{
    padding-right:100%;
}

.spinner {
 height: 50px;
 width: max-content;
 font-size: 18px;
 font-weight: 600;
 font-family: monospace;
 letter-spacing: 1em;
 color: #f5f5f5;
 filter: drop-shadow(0 0 10px);
 display: flex;
 justify-content: center;
 align-items: center;
}

.spinner span {
 animation: loading6454 1.75s ease infinite;
}

.spinner span:nth-child(2) {
 animation-delay: 0.25s;
}

.spinner span:nth-child(3) {
 animation-delay: 0.5s;
}

.spinner span:nth-child(4) {
 animation-delay: 0.75s;
}

.spinner span:nth-child(5) {
 animation-delay: 1s;
}

.spinner span:nth-child(6) {
 animation-delay: 1.25s;
}

.spinner span:nth-child(7) {
 animation-delay: 1.5s;
}

@keyframes loading6454 {
 0%, 100% {
  transform: translateY(0);
 }

 50% {
  transform: translateY(-10px);
 }
}

ul li{
    display: flex;
    justify-content: start  ;
}
.nav-item{
    padding-right: 10px;
    margin-right: 40px;
}
</style>