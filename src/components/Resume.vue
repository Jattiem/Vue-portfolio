<template>
   <section class="vh-100 py-5 pt-5 mt-5"  id="resume" v-if="resume">
    <h2 class="text-center text-white pt-5">Resume</h2>
      <div class="container-main">
        <div class="container-one">
          <h3>Education</h3>
          <div v-for="res in resume.resume1" :key="res">
            <h4>{{res.title}}</h4>
                <p>{{res.par}}</p>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="container-two" v-for="res in resume.resume2" :key="res">
          <h3>Experience</h3>
          <div>
            <h4>{{res.title}}</h4>
              <p>{{res.par}}</p>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
  export default{
    computed:{
      resume(){
        return this.$store.state.resume;
      },
      
    }
  }
</script>
<style scoped>
#resume {
  background: url(https://i.postimg.cc/T3nfs7DR/20526659.jpg),
    linear-gradient(rgba(0, 0, 0, 0.868), rgba(0, 0, 0, 0.873));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
  .container-main{
    display: flex;
    flex-direction: row;
    color: white;
  }
  .container-one{
    width: 50%;
    border: 2px solid white;
    text-align: start;
    border-radius: 10px;
    padding-left: 20px;
    margin: 10px;
    padding-right: 10px;
  }
  .container-two{
    width: 50%;
    border: 2px solid white;
    text-align: start;
    border-radius: 10px;
    padding-left: 20px;
    margin: 10px;
    padding-right: 10px;
  }
  p{
    color: gray;
  }
section{
  /* padding-top: 100px; */
  /* padding-bottom: 100px; */
  background-color: black;
  overflow-x: hidden;
}
@media only screen and (min-width:320px)  and (max-width: 321px) {
.container-main{
  padding-right: 10%;
}
.container-one{
  box-shadow: none;
  padding-left: 2px;
  border-radius: 10px;
}
.container-two{
  box-shadow: none;
  padding-left: 3px;
   border-radius: 10px;
}
}
</style>
