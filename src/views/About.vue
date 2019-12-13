<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Map></Map>
  </div>
</template>

<script>
import Map from "../components/Map.vue";
export default {
  name: "about",
  components: { Map },
  beforeCreate: function() {
    this.$store.dispatch("authenticate");
  }
};
</script>
