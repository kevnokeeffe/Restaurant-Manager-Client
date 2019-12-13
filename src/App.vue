<template>
  <div id="app">
    <NavBar></NavBar>
    <div id="app-container">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import * as auth from "./services/AuthService";
export default {
  name: "app",
  components: { Footer, NavBar },
  beforeCreate: function() {
    this.$store.dispatch("authenticate");
  },
  created: ()=>{
    window.addEventListener('beforeunload',auth.logout())
  },
  mounted: function() {
    //handler:(event)=>{auth.logout()}
    this.inactivityTime();
  },
  methods: {
    inactivityTime() {
      document.onload = this.resetTimer;
      document.onmousemove = this.resetTimer;
      document.ontouchstart = this.resetTimer;
      document.onclick = this.resetTimer();
      document.onscroll = this.resetTimer;
      document.onkeypress = this.resetTimer;
    },
    logout() {
      const path = `/`
      auth.logout();
      this.$router.push(path);
    },
    resetTimer() {
      clearTimeout(this.interval);
      this.interval = setTimeout(this.countDown, 300000);
    },
    countDown() {
      clearTimeout(this.interval);
      this.logout();
    }
  }
};
</script>

<style>
.VueTables__sortable {
  cursor: pointer;
}
div#app-container {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 40px;
  width: 100%;
  padding: 2rem;
  background-color: #1d2733;
  overflow: auto;
}
* {
  color: #fff;
}
</style>
