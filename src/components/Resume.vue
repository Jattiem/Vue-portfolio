<template>
   <section class="vh-100 py-5"  id="resume">
    <h2 class="text-center text-white">Resume</h2>
      <div class="container-main pt-3">
        <div class="container-one">
          <h3>Education</h3>
          <div>
            <h4>{{resume1[0].title}}</h4>
                <p>{{resume1[0].par}}</p>
            <h4>{{resume1[1].title}}</h4>
                <p>{{resume1[1].par}}</p>
            <h4>{{resume1[2].title}}</h4>
                <p>{{resume1[2].par}}</p>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="container-two">
          <h3>Experince</h3>
          <div>
            <h4>{{resume1[0].title}}</h4>
              <p>{{resume1[0].par}}</p>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
  export default{
    computed:{
      resume1(){
        return this.state.resume.resume1;
      },
      resume2(){
        return this.state.resume.resume2;
      }
    }
  }
</script>
<style scoped>

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
  padding-top: 100px;
  padding-bottom: 100px;
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
