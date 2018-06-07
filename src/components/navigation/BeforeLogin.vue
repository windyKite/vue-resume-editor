<template>
<div>
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav navbar-right">
      <li><a href=""><router-link to="/login"><button>sign in</button></router-link></a></li>
    </ul>
  </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$color: #007bff;
  .nav{
    button{
      background-color: #fff;
      width: 8em;
      font-size: 16px;
      border-radius: 10px;
      font-weight: 700;
      color: $color;
      border: 1px solid $color;
    }
  }
</style>
