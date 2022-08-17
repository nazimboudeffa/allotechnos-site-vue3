<template>
  <NavBar />
  <h1>Comparatif et Affiliation</h1>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
//import axios from "axios";

export default {
  name: 'AboutPage',
  components: { NavBar },
  // async mounted(){
  //   await axios
  //     .get('https://localhost:8080/publishers/${process.env.VUE_APP_AFFILIATE}/programmes?accessToken=${process.env.VUE_APP_ACCESS_TOKEN}')
  //     .then(response => console.log(response.data))
  // }
  /* Trying to fix */
  mounted(){
    console.log(process.env.VUE_APP_AFFILIATE)
  }
}
</script>