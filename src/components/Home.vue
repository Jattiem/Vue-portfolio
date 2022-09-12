<template>
  <section class="bg-dark text-light vh-100" id="home">
    <div id="title" class="container  d-flex justify-content-center align-items-center flex-column h-100">
      <h5 class="text-center">Hi I'm</h5>
      <h1 class="text-center">Yaseen Jattiem</h1>
      <h3 class="text-center">
        An Aspiring Full Stack Developer
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
section{
  margin-bottom: -100px;
  overflow-x: hidden;
}
.button{
 color: #090909;
 padding: 0.7em 1.7em;
 font-size: 15  px;
 border-radius: 0.5em;
 background: #e8e8e8;
 border: 1px solid #e8e8e8;
 transition: all .3s;
 box-shadow: 6px 6px 12px gray,
             -6px -6px 12px gray;
  text-decoration: none;
  size: 10px;
}
.button:active {
 color: #666;
 box-shadow: inset 4px 4px 12px #c5c5c5,
             inset -4px -4px 12px #ffffff;
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
