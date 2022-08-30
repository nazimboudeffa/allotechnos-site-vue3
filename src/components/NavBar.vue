<template>
    <nav>
      <div class="logo"><router-link to="/" style="text-decoration: none; color: inherit;"><a>Allo<span class="oneoone">Technos</span></a></router-link></div>
      <div class="onglets">
        <router-link to="products" style="text-decoration: none; color: inherit;"><a class="onglet">Produits</a></router-link>
        <router-link to="contact" style="text-decoration: none; color: inherit;"><a class="onglet">Contact</a></router-link>
      </div>
      <div class="buttons">
        <!-- <span class="login">Connexion</span> -->
        <a class="menubtn">Connexion</a>
      </div>
    </nav>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style scoped>
  nav {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding: 10px;
    background-color: black;
  }
  .logo{
    font-weight:700;
    font-size:1.4rem;
    color: white;
  }
  .oneoone{
    font-weight:700;
    font-size:1.4rem;
    color: white;
    border: solid 2px;
    padding-left: 2px;
    padding-right: 2px;
    margin-left: 4px;
  }
  .onglet {
    margin-right:20px;
    cursor:pointer;
    color: orange;
    background-color: black;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
  }
  .onglet:hover{
    color: black;
    background-color: orange;
  }
  .login {
    color: white;
    font-size: 1rem;
  }
  .menubtn{
    background:orange;
    color:black;
    padding: 0 24px;
    border-radius:24px;
    height:32px;
    margin-left:10px;
    font-size: 1rem;
    text-decoration: none;
    padding-top: 2px;
    padding-bottom: 2px;
  }
</style>