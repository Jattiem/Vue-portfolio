<template>
  <section class="bg-dark text-light vh-100 py-5" id="home">
    <div id="title" class="container d-flex justify-content-center align-items-center flex-column h-100">
      <h5 class="text-center">Hi I'm</h5>
      <h1 class="text-center">Yaseen Jattiem</h1>
      <h3 class="text-center">
        <!-- An Aspiring Full Stack Developer -->
        <span style="color: rgb(213, 57, 0)">A</span>n
        <span style="color: rgb(213, 57, 0)">A</span>spiring
        <span style="color: rgb(213, 57, 0)">F</span>ull
        <span style="color: rgb(213, 57, 0)">S</span>tack
        <span style="color: rgb(213, 57, 0)">D</span>eveloper
      </h3>
        <router-link class="button" to="./about">See More</router-link>
    </div>    
  </section>
</template>

<script>
export default {

}
</script>
<style scoped>
.button{
 color: white;
 padding: 0.7em 1.7em;
 font-size: 13px;
 border-radius: 20px;
 background: transparent;
 border: 2px solid #e8e8e8;
 transition: all .3s;
  text-decoration: none;
  width: 480px;
  height: 40px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  
}
.button:active {
 color: white;
}
#home {
  background: url(https://i.postimg.cc/Cx260p61/wp9221335.jpg),
    linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed; 
}
h1{
   color: rgb(213, 57, 0);
}

</style>
<script>

</script>
