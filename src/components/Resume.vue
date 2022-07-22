<template>
   <section class="py-5" id="resume">
    <h2 class="text-center p-5 text-white">Resume</h2>
      <div class="container-main">
        <div class="container-one">
          <h3>Education</h3>
          <div>
            <h4>Lotus High School:2017:</h4>
                <p>This is the first school attented where I was first introduced to high school.</p>
            <h4>LifeChoice Academy: 2022Present:</h4>
                <p>A Bootcamp program that provides you with the core fundamentals of Web Development, learning coding languages such as HTML, CSS, JavaScript, and more coding techniques. We taught interpersonal and self-development skills to take us further in life.</p>
            <h4>Lentegeur HighSchool: 2018-2021:</h4>
                <p>I went to Lentegeur High School in Lentegeur,Where I was always doing my work and attenting class regulary. I was always the one that kept to himself and did my work diligently.</p>
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
            <h4>Home Preparation: 2021:</h4>
              <p>I worked for my aunt for a month where I had to prepare a home for someone that was going to rent. </p>
          </div>
        </div>
      </div>
    </section>
</template>
<style scoped>

  .container-main{
    display: flex;
    flex-direction: row;
    color: white;
    margin-bottom: 24px;
    margin-left: 10px;
    margin-right: 10px;
    overflow-x: hidden;
  }
  .container-one{
    width: 50%;
    border: 2px solid white;
    text-align: start;
    border-radius: 10px;
    padding-left: 20px;
    margin: 10px;
    padding-right: 10px;
    box-shadow: 6px 6px 6px white;
  }
  .container-two{
    width: 50%;
    border: 2px solid white;
    text-align: start;
    border-radius: 10px;
    padding-left: 20px;
    margin: 10px;
    padding-right: 10px;
    box-shadow: 6px 6px 6px white;
  }
  h2{
    margin-top: 15px;
  }
  p{
    color: gray;
  }
section{
  background-color: black;
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
