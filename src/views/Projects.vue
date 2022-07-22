<template>
<section id="projects" class="py-5">
    <h2 class="text-center p-5 text-white">Projects</h2>
<div class="container">
  <div id="card" class="card col-md-4" style="width: 14rem;">
  <div class="card-body">
    <h5 class="card-title">Html Website</h5>
    <img class="img-fluid" src="http://127.0.0.1:5500/images%20for%20projects/Screenshot%202022-05-12%20112628.png" alt="">
    <a href="https://github.com/Jattiem/name" class="card-link"  target="blank">Github</a>
    <a href="https://flourishing-pony-1a9a82.netlify.app/" class="card-link"  target="blank">Netlify</a>
  </div>
</div>
<br>
<div  id="card" class="card col-md-4" style="width: 14rem;">
  <div class="card-body">
    <h5 class="card-title">Css&Html Portfolio</h5>
    <img  class="img-fluid" src="http://127.0.0.1:5500/images%20for%20projects/Screenshot%202022-05-12%20112221.png" alt="">
    <a href="https://github.com/Jattiem/portfolio" class="card-link" target="blank">Github</a>
    <a href="https://jovial-centaur-5b5cac.netlify.app/" class="card-link"  target="blank">Netlify</a>
  </div>
</div>
<br>
<div  id="card" class="card col-md-4" style="width: 14rem;">
  <div class="card-body">
    <h5 class="card-title">Calculator</h5>
    <img  class="img-fluid" src="../assets/img3.png" alt="">
    <a href="https://github.com/Jattiem/jsscalculator" class="card-link"  target="blank">Github</a>
    <a href="https://sweet-longma-3e1f27.netlify.app/" class="card-link"  target="blank">Netlify</a>
  </div>
</div>
</div>
<br>
<div class="container2">
  <div id="card" class="card col-md-4" style="width: 14rem;">
  <div class="card-body">
    <h5 class="card-title">Rainbow</h5>
    <img class="img-fluid" src="https://jovial-centaur-5b5cac.netlify.app/Screenshot%202022-04-22%20083414.png" alt="">
    <a href="https://github.com/Jattiem/Rainbow" class="card-link"  target="blank">Github</a>
    <a href="https://meek-paprenjak-f44d29.netlify.app/" class="card-link"  target="blank">Netlify</a>
  </div>
</div>
<br>
<div  id="card" class="card col-md-4" style="width: 14rem;">
  <div class="card-body">
    <h5 class="card-title">Vue project</h5>
    <img  class="img-fluid" src="../assets/img.png" alt="">
    <a href="https://github.com/Jattiem/Property-listing" class="card-link"  target="blank">Github</a>
    <a href="https://monumental-dasik-d637e3.netlify.app/" class="card-link"  target="blank">Netlify</a>
  </div>
</div>
<br>
<div  id="card" class="card col-md-4" style="width: 14rem;">
  <div class="card-body">
    <h5 class="card-title">Body Mass</h5>
    <img  class="img-fluid" src="../assets/img2.png" alt="">
    <a href="https://github.com/Jattiem/BMI-calculator" class="card-link"  target="blank">Github</a>
    <a href="https://tiny-pegasus-052ed2.netlify.app/" class="card-link"  target="blank">Netlify</a>
  </div>
</div>
</div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
    border: 2px solid  black;
    border-radius: 10px;
}
.container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 340px;
    margin-top: -140px;
    padding-top: 80px;
}
.container2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 100px;
    margin-top: -485px;
}
#card{
    margin: 20px;
}
section{
    background-color: black;
    margin-bottom: -100px;
}
h2{
    margin-top: 10px;
}
.card-link{
    padding-top: 10px;
    text-decoration: none;
    color:  black;
}
.card-link:hover{
    color: gray;
}
@media only screen and (min-width:320px)  and (max-width: 321px) {
  
}
</style>