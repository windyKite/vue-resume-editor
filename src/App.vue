<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AV from 'leancloud-storage'
export default {
  data(){
    return {

    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-right: -15px; */
}
</style>
