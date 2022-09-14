<template>
  <section id="projects" class="py-5 vh-100">
    <div
      class="row col-md-6 container d-flex justify-content-center pt-5"
      v-if="projects"
    >
      <h2 class="text-center p-3 text-white pt-5">Projects</h2>
      <div
        v-for="project in projects"
        :key="project"
        class="card"
        style="width: 14rem"
      >
        <div class="card-body">
          <h5 class="card-title text-white">{{ project.name }}</h5>
          <img class="img-fluid" :src="project.image" alt="image" />
          <a
            id="github"
            class="social-button github"
            :href="project.github"
            target="_blank"
            ><i class="bi bi-github"></i
          ></a>

          <a id="ficon" :href="project.netlify" class="netlify" target="_blank">
            <i id="net" class="iconify" data-icon="logos:netlify"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.project;
    },
  },
};
</script>

<style scoped>
#net {
  margin-top: -5px;
}
a {
  font-size: 25px;
  padding: 10px;
  color: white;
}
img {
  border: 2px solid white;
  border-radius: 10px;
  height: 100px;
  width: 200px;
}
.card {
  margin-bottom: 20px;
  margin-left: 20px;
  border: 2px solid white;
  border-radius: 10px;
  background-color: transparent;
  height: 200px;
}
.container {
  margin-left: 375px;
}
#projects {
  background: url(https://i.postimg.cc/8czCcn4h/HD-wallpaper-doodles-abstract-black-dark-design-doodle-drawing-patterns-pen-art.jpg),
    linear-gradient(rgba(0, 0, 0, 0.868), rgba(0, 0, 0, 0.873));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
@media only screen and (min-width: 320px) and (max-width: 321px) {
}
</style>