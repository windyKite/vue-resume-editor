<template>
  <div class="row">
    <h1>作品</h1>
    <p>Portfolio Show</p>
    <project-item v-show="!edit" v-bind:works="works"></project-item>
    <project-edit v-show="edit" v-bind:works="works"></project-edit>
  </div>
</template>

<script>
import ProjectItem from '@/components/resume/project/ProjectItem'
import ProjectEdit from '@/components/resume/project/ProjectEdit'
export default {
  name: 'Project',
  props:['works','edit'],
  components:{
    ProjectItem,
    ProjectEdit
  }
}
</script>

<style scoped>
p{
  color: #007bff;
}
</style>
