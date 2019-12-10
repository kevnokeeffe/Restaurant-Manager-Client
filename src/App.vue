<template>
  <div id="app">
    <NavBar></NavBar>
    <div id="app-container">
    <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
  import NavBar from "./components/Navbar";
  import Footer from "./components/Footer";
  export default {
    name: 'app',
    components: {Footer, NavBar},
    beforeCreate: function(){
      this.$store.dispatch('authenticate');
    }
  }

</script>

<style>
  .VueTables__sortable {
    cursor: pointer;
  }
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