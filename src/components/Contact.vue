<template>
  <section id="contact" class="py-5 vh-100 pt-5">
    <div class="container pt-5">
      <h2 class="text-center pt-5">Contact Me</h2>
      <div class="row">
        <div class="form">
          <form
            action="https://formspree.io/f/mnqwlpkg"
            role="form"
            method="post"
            target="blank"
          >
            <div class="form-group w-100">
              <label class="form-label" for="name"></label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required=""
                placeholder="Enter your firstname"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="email"></label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required=""
                placeholder="Enter your email address"
              />
            </div>
            <div class="form-group">
              <label class="form-label" id="subjectLabel" for="subject"></label>
              <input
                type="text"
                class="form-control"
                id="subject"
                name="subject"
                required=""
                placeholder="Enter your number"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="message"></label>
              <textarea
                rows="6"
                cols="60"
                name="message"
                class="form-control"
                id="message"
                required=""
                placeholder="Comments"
              ></textarea>
            </div>
            <br />
            <button type="submit" class="btn">Submit</button>
            <button type="reset" class="btn">Clear</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
  background: url(https://i.postimg.cc/j24T3C9R/trippy-art05-4x.png),
    linear-gradient(rgba(0, 0, 0, 0.868), rgba(0, 0, 0, 0.873));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.form {
  border: 2px solid white;
  border-radius: 20px;
  height: 470px;
  width: 700px;
  margin-left: 300px;
}
h2 {
  color: rgb(241, 239, 239);
}
button {
  color: rgb(239, 234, 234);
  border: 1px solid rgb(255, 249, 249);
  margin-left: 10px;
}
button:hover {
  color: rgb(151, 146, 146);
  border: 1px solid rgb(149, 148, 148);
}
.form-control {
  border: 3px solid rgb(141, 141, 141);
}
input {
  width: 670px;
  /* margin-left: 3px; */
}
textarea {
  width: 670px;
  /* margin-left: 350px; */
}
</style>