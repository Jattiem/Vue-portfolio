<template>
  <section class="py-5 text-center vh-100 pt-5" id="skills">
    <div class="container pt-5">
      <h2 class="text-center text-white pt-5">Skills</h2>
      <div class="row">
        <div id="con" class="col-lg-4 col-md-12 col-sm-12">
          <img
            class="img-fluid"
            alt="image"
            src="https://i.postimg.cc/44wPZTYg/css.png"
          />
          <div class="p-3">
            <p class="d-flex justify-content-center text-white">
              CSS3: <span>80%</span>
            </p>
          </div>
        </div>
        <div id="con" class="col-lg-4 col-md-12 col-sm-12">
          <img
            class="img-fluid"
            alt="image"
            src="https://i.postimg.cc/9FmWRyX9/bootstrap-icons.png"
          />
          <div class="p-3">
            <p class="d-flex justify-content-center text-white">
              Bootstrap: <span>90%</span>
            </p>
          </div>
        </div>
        <div id="con" class="col-lg-4 col-md-12 col-sm-12">
          <img
            class="img-fluid"
            alt="image"
            src="https://i.postimg.cc/HskvLSYz/html5-removebg-preview.png"
          />
          <div class="p-3">
            <p class="d-flex justify-content-center text-white">
              HTML5: <span>97%</span>
            </p>
          </div>
        </div>
        <div id="con" class="col-lg-4 col-md-12 col-sm-12">
          <img
            class="img-fluid"
            alt="image"
            src="https://i.postimg.cc/ZK1kP806/learn-how-to-code-892774-removebg-preview.png"
          />
          <div class="p-3">
            <p class="d-flex justify-content-center text-white">
              JavaScript: <span>20%</span>
            </p>
          </div>
        </div>
        <div id="con" class="col-lg-4 col-md-12 col-sm-12">
          <img
            class="img-fluid"
            alt="image"
            src="https://i.postimg.cc/VvCgzC1c/1-q-Hs-E-PM5-TLmqzm-Yjmlr6-A-removebg-preview.png"
          />
          <div class="p-3">
            <p class="d-flex justify-content-center text-white">
              Vue.js: <span>40%</span>
            </p>
          </div>
        </div>
        <div id="con" class="col-lg-4 col-md-12 col-sm-12">
          <img
            class="img-fluid"
            alt="image"
            src="https://i.postimg.cc/T2JXjhpX/difference-between-sql-and-mysql.jpg"
          />
          <div class="p-3">
            <p class="d-flex justify-content-center text-white">
              mySQL: <span>20%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .row{
    padding-left: 200px;
    padding-right: 200px;
  }
#skills {
  background: url(https://i.postimg.cc/DwC7NZyc/black-wallpaper-29.jpg),
    linear-gradient(rgba(0, 0, 0, 0.851), rgba(0, 0, 0, 0.837));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
img {
  border-radius: 10px;
  border: 2px solid white;
  height: 110px;
  margin-top: 10px;
  object-fit: cover;
  width: 200px;
  transition: all 0.2s ease-in-out;
}
img:hover {
  transform: scale(1.1);
}
</style>
