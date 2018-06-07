<template>
  <div class="row">
    <ul class="clearfix">
      <li v-for="(item,index) in skills" v-bind:key="index" class=" col-lg-4 col-12 col-md-6 col-xs-12 skillItem">
        <div class="panel panel-default">
          <div class="panel-heading">
            {{item.name}}
          </div>
          <div class="panel-body skillIntroduction">
            {{item.desc}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['skills']
}
</script>

<style scoped>
.skillIntroduction{
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
.panel-heading > a{
  color: #007bff;
}
@media (max-width:767px){
  li{
    padding: 0 30px;
  }
}
</style>


