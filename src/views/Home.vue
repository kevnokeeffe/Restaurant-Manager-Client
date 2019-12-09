<template>
  <div id="custom-home">
    <Home/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  },
}

</script>

<style>
  div#custom-home{
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 767px){
    div#navbarCollapse{
      width:100% ;
      position: fixed;
      top:75px;
      left:0;
      padding-left: 20px;
      padding-bottom: 5px;
      background-color: #373F46;
    }
  }
</style>