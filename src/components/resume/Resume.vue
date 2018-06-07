<template>
  <div class="container">
    <introduction v-bind:name="resume.name" v-bind:intros="resume.intros" v-bind:edit="edit"></introduction>
    <contact v-bind:contacts="resume.contacts" v-bind:edit="edit"></contact>
    <skill v-bind:edit="edit" v-bind:skills="resume.skills"></skill>
    <project v-bind:edit="edit" v-bind:works="resume.works"></project>
  </div>
</template>

<script>
import Introduction from '@/components/resume/introduction/Introduction'
import Contact from '@/components/resume/contact/Contact'
import Skill from '@/components/resume/skill/Skill'
import Project from '@/components/resume/project/Project'
export default {
  name: 'Resume',
  props:['edit','resume'],
  components:{
    Introduction,
    Contact,
    Skill,
    Project
  }
}
</script>

<style scoped>

</style>
