<template>
  <section class="py-5" id="about">
    <div class="container flex p-5">
        <h2 class="text-center" >About Me</h2>
      <div class="row mt-3">
        <!-- Column one -->
        <div class="col-md-6">
          <img class="img-fluid" src="http://127.0.0.1:5500/Yaseen%20(1).JPG" alt="Image">
        </div>
        <!-- Column two -->
        <div id="column2" class="col-md-6">
          <p>Hello I'm <span  style="color:rgb(137, 132, 132)">Yaseen Jattiem</span>,An aspiring Full Stack Developer.</p>
          <p>My curiosity for coding led me to become more interested in coding,Since I know that technology is the norm for everyone I became more interested and wanted to do more with coding.Which led me to become a <span style="color:rgb(137, 132, 132)">Aspring Full Stack Developer</span>.</p>
            <div class="row">
              <p>D.O.B : 15/12/2003</p>
            </div>
            <div class="row">
              <p>Country : South Africa</p>
            </div>
            <div class="row">
              <p>Location : Cape Town</p>
            </div>
            <div class="row">
              <p>Email : yaseenjattiem0000@gmail.com</p>
            </div>
            <div class="row">
              <p>Phone : 0738367533</p>
            </div>
            <div class="row">
             <p>Freelance : Available</p>
            </div>
        </div>
      </div>
    </div>
</section>
</template>
<style scoped>
section{
  margin-top: 13px;
}
#column2{
  padding-top: 18px;
}

  h2{
    color: white;
  }
  p{
    color: white;
  }
  .row{
    text-align: left;
  }
  img{
    margin-top: 17px;
    border: 2px solid white;
    border-radius: 20px;
    height: 350px;
    width: 500px;
    object-fit: cover;
    object-position: 0 1px;
  }
  #about{
    background-color: black;
}

</style>

