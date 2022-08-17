<template>
    <div id="hero">
    <div class="hero-text">
        <h1 text-3xl font-bold underline>Comparez malin</h1>
        <p>Le site d'affiliation pour faire des économies</p>
        <a class="herobtn">Nous rejoindre</a>
    </div>
    </div>
</template>
<script>
export default {
    name: 'HeroSection'
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    background-color: #141414;
    color: #fff;
  }
#hero{
  background-image: url('https://raw.githubusercontent.com/nazimboudeffa/assets2/main/pics/unsplash/c-d-x-PDX_a_82obo-unsplash.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
}
.hero-text{
  margin-left: 50px;
  color: white;
}
.hero-text h1{
  font-size: 3rem;
}
.hero-text p{
  font-size: 1.5rem;
}
.herobtn {
  text-decoration: none;
  color: orange;
  background-color: black;
  border-color: orange;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1rem;
  display: inline-block;
  padding: 10px 30px;
  margin-top: 20px;
}
.herobtn:hover{
  color: black;
  background-color: orange;
  border-color: black;
}
@media screen and (max-width: 600px) {
  * {
    font-size: 13px;
  }
}
</style>