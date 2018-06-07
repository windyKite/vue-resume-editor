<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">resume editor</a>
        </div>
        <before-login v-if="login === false"></before-login>
        <after-login v-if="login === true" v-bind:login="login" v-bind:edit="edit"></after-login>
      </div>
    </nav>
  </div>
</template>

<script>
import BeforeLogin from '@/components/navigation/BeforeLogin'
import AfterLogin from '@/components/navigation/AfterLogin'
import AV from 'leancloud-storage'

export default {
  name: 'Navigation',
  components:{
    BeforeLogin,
    AfterLogin,
  },
  props:['login','edit'],
}
</script>

<style lang="scss" scoped>
$color: #007bff;
  .navbar-header{
    a{
      color: $color;
      font-size: 30px;
      font-weight: 700;
    }
  }

</style>

