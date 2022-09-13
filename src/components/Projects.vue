<template>
  <section id="projects" class="py-5 vh-100">
    <h2 class="text-center p-5 text-white">Projects</h2>
    <div class="container d-flex justify-content-center" v-if="projects">
      <div
        v-for="project in projects"
        :key="project"
        class="card"
        style="width: 14rem"
      >
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <img class="img-fluid" :src="project.image" alt="" />
          <a :href="project.github" class="card-link" target="blank">Github</a>
          <a :href="project.netlify" class="card-link" target="blank"
            >Netlify</a
          >
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
section {
  overflow-x: hidden;
  background-color: black;
}
img {
  border: 2px solid black;
  border-radius: 5px;
}
/* img {
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
} */
@media only screen and (min-width: 320px) and (max-width: 321px) {
}
</style>