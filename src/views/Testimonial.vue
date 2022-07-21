<template>
<section id="testemonial" class="py-5">
  <div class="container text-black text-center p-5">
    <h2 class="text-white">Testemonials</h2>
    <div id="carouselExampleIndicators" class="carousel m-5" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active circle"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="circle"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="circle"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="circle"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" class="circle"></button>
  </div>
  <div class="carousel-inner pb-5">
    <div class="carousel-item active">
      <img id="img1" class="img-fluid" src="http://127.0.0.1:5500/image%20for%20testimonial/joel2.jpg" alt="">
      <h5 class="p-2">Joel Mukanya</h5>
      <p>Yaseen has exhibited a vital grasp of the HTML, CSS & Bootstrap topics we have covered in class. I see the great potential and recommend him.
      </p>
    </div>
    <div class="carousel-item">
      <img id="img2" class="img-fluid"  src="http://127.0.0.1:5500/image%20for%20testimonial/Daniel%20(2).JPG" alt="">
      <h5 class="p-2">Daniel Fredericks</h5>
      <p>Yaseen is a person with great potential.I believe that he will be able to accomplish much and that he will be an asset to any company.
      </p>
    </div>
    <div class="carousel-item">
      <img id="img3" class="img-fluid"  src="http://127.0.0.1:5500/image%20for%20testimonial/Clayton%20(1).JPG" alt="">
      <h5 class="p-2">Clayton Adonis</h5>
      <p>The combination of his confidence and knowledge makes a valuable asset and he brightens up every room he is in</p>
    </div>
    <div class="carousel-item">
      <img id="img4" class="img-fluid" src="http://127.0.0.1:5500/image%20for%20testimonial/Jared%20(1).JPG" alt="">
      <h5 class="p-2">Jared Isaacs</h5>
      <p>Yaseen is an outgoing, hardworking, creative web developer. Who sets out to achieve his goals through perseverance and determination..</p>
    </div>
    <div class="carousel-item">
      <img id="img5" class="img-fluid" src="http://127.0.0.1:5500/image%20for%20testimonial/Muddathir%20(1).JPG" alt="">
      <h5 class="p-2">Muddathir Dawood</h5>
      <p>Yaseen is a developer with potential to go far in life.He will always be the underdog of the team and come with unexpected support.</p>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
    .circle{
  background-color: gray !important;
  aspect-ratio: 1 !important;
  border-radius: 50% !important;
  width: 20px !important;
  height: 20px !important;
  aspect-ratio: 1 !important;
}
img{
    border: 2px solid white;
}
#img1{
  object-fit: cover;
  width: 250px;
  height: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
}
#img2{
  object-fit: cover;
  width: 250px;
  height: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-position: 0 0.5px;
}

#img3{
  object-fit: cover;
  width: 250px;
  height: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
}
#img4{
  object-fit: cover;
  width: 250px;
  height: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-position: 0 0.5px;
}
#img5{
  object-fit: cover;
  width: 250px;
  height: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-position: 0 0.5px;
}
h2{
    text-align: center;
    padding-top: 10px;
}
section{
    background-color: black;
    margin-bottom: -77px;
}
p{
    color: white;
}
</style>