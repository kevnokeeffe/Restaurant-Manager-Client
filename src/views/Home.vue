<template>
  <div id="custom-home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  beforeEnter:(to,from,next)=>{

  }
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
</style>