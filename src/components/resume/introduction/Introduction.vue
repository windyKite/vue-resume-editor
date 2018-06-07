<template>
  <div class="row">
    <div class="col-12 text-center">
      <h1>{{name}}</h1>
      <p>{{intros}}</p>
      <introduction-edit v-bind:name="name" v-bind:intros="intros" v-show="edit"></introduction-edit>
    </div>
  </div>
</template>

<script>
import IntroductionEdit from '@/components/resume/introduction/IntroductionEdit'
export default {
  name: 'Introduction',
  props:['edit','name','intros'],
  components:{
    IntroductionEdit,
  }
}
</script>

<style scoped>
p{
  color: #007bff;
}
</style>


