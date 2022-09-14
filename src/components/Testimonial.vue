<template>
<section id="testimonial" class="py-5 vh-100">
  <div class="container pt-5 text-black text-center">
    <h2 class="text-white pt-5">Testemonials</h2>
    <div id="carouselExampleIndicators" class="carousel mt-4" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active circle"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="circle"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="circle"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="circle"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" class="circle"></button>
  </div>
  <div class="carousel-inner pb-5">
    <div id="box" class="carousel-item  " v-bind:class="{ active: index === 0 }" v-for="(mense,index) in mense" :key="index">
        
      <img id="img1" class="img-fluid" :src="mense.image" alt="image">
      <p>{{mense.name}}</p>
      <p class="des">
        {{mense.description}}
      </p>
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
export default{
    computed: {
        mense(){
            return this.$store.state.mense;
        }
    }
}
</script>

<style scoped>
  #testimonial {
  background: url(https://i.postimg.cc/504ycvq6/black-and-white-art-graffiti-murals-heyapathy-surreal-comics-black-graffiti-images-collection.jpg),
    linear-gradient(rgba(0, 0, 0, 0.868), rgba(0, 0, 0, 0.873));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.circle{
  background-color: gray !important;
  aspect-ratio: 1 !important;
  border-radius: 50% !important;
  width: 20px !important;
  height: 20px !important;
  aspect-ratio: 1 !important;
}

#img1{
  object-fit: cover;
  width: 250px;
  height: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-position: 0 0px;
  padding-bottom: 10px;
}
h2{
    text-align: center;
}
p{
    color: white;
}
</style>