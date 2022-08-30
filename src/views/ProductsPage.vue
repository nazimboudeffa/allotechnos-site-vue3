<template>
  <NavBar />
  <h1>Comparatif et Affiliation</h1>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: 'AboutPage',
  components: { NavBar },
  async mounted(){
    await axios
      .get(`http://localhost:8080/publishers/${process.env.VUE_APP_AFFILIATE}/programmes?relationship=joined`,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + process.env.VUE_APP_ACCESSTOKEN
        }
      })
      .then(response => console.log(response.data))
      .catch((error) => {
        console.log(error), (this.network = false);
      });
  }
  //   const instance = axios.create({
  //     baseURL: 'https://api.awin.com/',
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + process.env.VUE_APP_ACCESSTOKEN
  //   });
  //   instance.get('publishers/'+process.env.VUE_APP_AFFILIATE+'/programmes?relationship=joined')
  //     .then(response => console.log(response.data))
  // }
  /* Trying to fix */
  // mounted(){
  //   console.log(process.env.VUE_APP_AFFILIATE)
  // }
}
</script>