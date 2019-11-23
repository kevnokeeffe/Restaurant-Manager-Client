<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="app-container">
    <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "./components/Footer";
  export default {
    name: 'app',
    components: {Footer, Navbar},
    beforeCreate: function(){
      this.$store.dispatch('authenticate');
    }
  }

</script>

<style>
  div#app-container{
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 40px;
    width:100%;
    padding:2rem;
    background-color: #1d2733;
    overflow: auto;
  }
  *{color:#fff;}
</style>