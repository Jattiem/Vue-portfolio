<template>
  <section class="py-5 vh-100" id="about">
    <div class="container flex pt-5">
      <h2 class="text-center pt-5 pb-3">About Me</h2>
      <div class="row mt-3">
        <!-- Column one -->
        <div class="col-md-6 img">
          <img
            class="img-fluid"
            src="https://i.postimg.cc/GmRmj6j4/Yaseen-1.jpg"
            alt="Image"
          />
        </div>
        <!-- Column two -->
        <div id="column2" class="col-md-6">
          <p>
            Hello I'm
            <span style="color: gray">Yaseen Jattiem</span>,An aspiring Full
            Stack Developer.
          </p>
          <p>
            My curiosity for coding led me to become more interested in
            coding,Since I know that technology is the norm for everyone I
            became more interested and wanted to do more with coding.Which led
            me to become a
            <span style="color: gray">Aspring Full Stack Developer</span>.
          </p>
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
#about {
  background: url(https://i.postimg.cc/RZR6htzB/Wonderful-Black-And-White-Wallpaper.jpg),
    linear-gradient(rgba(0, 0, 0, 0.868), rgba(0, 0, 0, 0.873));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
#column2 {
  padding-top: 18px;
  border-radius: 20px;
  border: 2px solid white;
  width: 500px;
}

h2 {
  color: white;
}
p {
  color: white;
}
.row {
  text-align: left;
}
img {
  border: 2px solid white;
  border-radius: 20px;
  height: 440px;
  object-fit: cover;
  object-position: 0 0px;
  margin-left: 200px;
}
/* #about {
  background-color: black;
} */
</style>

