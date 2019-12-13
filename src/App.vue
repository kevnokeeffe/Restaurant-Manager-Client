<template>
  <div id="app">
    <NavBar></NavBar>
    <div id="app-container">
      <router-view />
    </div>
    
    <alert ></alert>
    <Footer><b-alert :message=mess_alr v-if="alerter"></b-alert></Footer>
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
  created() {
    this.mess_alr = "create";
    this.alerter = false;
  },
  mounted: function() {
    this.mess_alr = "mounted";
    this.inactivityTime();
    this.alerter = false;
  },
  methods: {
    inactivityTime() {
      document.onload = this.resetTimer;
      document.onmousemove = this.resetTimer;
      document.ontouchstart = this.resetTimer;
      document.onclick = this.resetTimerdocument.onscroll = this.resetTimer;
      document.onkeypress = this.resetTimer;
    },
    logout() {
      auth.logout();
    },
    resetTimer() {
      clearTimeout(this.interval);
      this.interval = setTimeout(this.countDown, 300000);
    },
    countDown() {
      clearTimeout(this.interval);
      this.mess_alr = "auto time out";
      this.alerter = true;
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
