<template>
  <section id="projects" class="py-5">
    <h2 class="text-center p-5 text-white">Projects</h2>
    <div class="container">
      <div id="card" class="card col-md-4" style="width: 14rem">
        <div v-for="project in projects" :key="project" class="card-body">
          <h5 class="card-title">{{project.name}}</h5>
          <img
            id="imgfor"
            class="img-fluid"
            :src="project.image"
            alt=""
          />
          <a
            :href="project.github"
            class="card-link"
            target="blank"
            >Github</a
          >
          <a
            :href="project.netlify"
            class="card-link"
            target="blank"
            >Netlify</a
          >
        </div>
      </div>
      <br />
      <div id="card" class="card col-md-4" style="width: 14rem">
        <div class="card-body">
          <h5 class="card-title">{{project.name}}</h5>
          <img
            class="img-fluid"
            :src="project.image"
            alt=""
          />
          <a
          :href="project.github"
            class="card-link"
            target="blank"
            >Github</a
          >
          <a
          :href="project.netlify"
            class="card-link"
            target="blank"
            >Netlify</a
          >
        </div>
      </div>
      <br />
      <div id="card" class="card col-md-4" style="width: 14rem">
        <div class="card-body">
          <h5 class="card-title">{{project.name}}</h5>
          <img
            class="img-fluid"
            :src="project.image"
            alt=""
          />
          <a
          :href="project.github"
            class="card-link"
            target="blank"
            >Github</a
          >
          <a
          :href="project.netlify"
            class="card-link"
            target="blank"
            >Netlify</a
          >
        </div>
      </div>
    </div>
    <br />
    <div class="container2">
      <div id="card" class="card col-md-4" style="width: 14rem">
        <div class="card-body">
          <h5 class="card-title">{{project.name}}</h5>
          <img
            class="img-fluid"
            :src="project.image"
            alt=""
          />
          <a
          :href="project.github"
            class="card-link"
            target="blank"
            >Github</a
          >
          <a
          :href="project.netlify"
            class="card-link"
            target="blank"
            >Netlify</a
          >
        </div>
      </div>
      <br />
      <div id="card" class="card col-md-4" style="width: 14rem">
        <div class="card-body">
          <h5 class="card-title">{{project.name}}</h5>
          <img
            class="img-fluid"
            :src="project.image"
            alt=""
          />
          <a
          :href="project.github"
            class="card-link"
            target="blank"
            >Github</a
          >
          <a
          :href="project.netlify"
            class="card-link"
            target="blank"
            >Netlify</a
          >
        </div>
      </div>
      <br />
      <div id="card" class="card col-md-4" style="width: 14rem">
        <div class="card-body">
          <h5 class="card-title">{{project.name}}</h5>
          <img
            class="img-fluid"
            :src="project.image"
            alt=""
          />
          <a
          :href="project.github"
            class="card-link"
            target="blank"
            >Github</a
          >
          <a
          :href="project.netlify"
            class="card-link"
            target="blank"
            >Netlify</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed:{
    projects(){
      return this.store.state.project;
    }
  }
};
</script>

<style scoped>
img {
  border: 2px solid black;
  border-radius: 10px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 340px;
  margin-top: -140px;
  padding-top: 80px;
}
.container2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 100px;
  margin-top: -485px;
}
#card {
  margin: 20px;
}
#card:hover {
  transform: scale(1.1);
  transition: all 0.4s linear;
}
section {
  background-color: black;
  margin-bottom: -100px;
}
h2 {
  margin-top: 10px;
}
.card-link {
  padding-top: 10px;
  text-decoration: none;
  color: black;
}
.card-link:hover {
  color: gray;
}
#imgfor {
  height: 109px;
  width: 190px;
}
@media only screen and (min-width: 320px) and (max-width: 321px) {
}
</style>