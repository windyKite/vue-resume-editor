<template>
  <div class="row">
    <ul>
      <li v-for="(item, index) in works" v-bind:key="index"  class=" col-lg-4 col-12 col-md-6 col-xs-12 projectItem">
        <div class="panel panel-default">
          <div class="panel-heading">
            <a v-bind:href="item.link">{{item.name}}</a></div>
          <div class="panel-body projectIntroduction">
            {{item.desc}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['works'],
}
</script>

<style scoped>
a{
  text-decoration: underline;
}
.projectIntroduction{
  text-align: left;
}
.panel{
  border: 1px solid #007bff;
}
.panel-heading{
  background-color: #e3f2fd;
  color: #007bff;
  font-size: 16px;
}
@media (max-width:767px){
  li{
    padding: 0 30px;
  }
}
</style>
