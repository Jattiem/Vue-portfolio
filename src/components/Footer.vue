<template>
<section class="footer bg-dark">
    <footer class="container flex">
    <div class="icons">
      <a href=""  class="bi bi-github" aria-label="Github"></a>
      <a href=""  class="bi bi-linkedin" aria-label="Linkedin"></a>
      <a href=""  class="bi bi-twitter" aria-label="Twitter"></a>
      <a href=""  class="bi bi-facebook"  aria-label="Facebook"></a>
    </div>
      <div class="text-center py-2 text-white">© 2022 Copyright. All rights reserved</div>
  </footer>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.icons a{
  color: white;
  margin: 0;
  padding: 10px;
  font-size:2rem;
}
.icons a:hover{
  color: rgb(137, 132, 132);
  transition: .5s ;
}
section{
  padding-top: 10px;
   border-top: 2px solid rgb(232, 225, 225);
}
</style>