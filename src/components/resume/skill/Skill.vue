<template>
  <div class="row">
      <h1>技能</h1>
      <p>Professional Skills</p>
      <skill-item v-show="!edit" v-bind:skills="skills"></skill-item>
      <skill-edit v-show="edit" v-bind:skills="skills"></skill-edit>
  </div>
</template>

<script>
import SkillItem from '@/components/resume/skill/SkillItem'
import SkillEdit from '@/components/resume/skill/SkillEdit'
export default {
  name: 'Skill',
  data(){
    return {}
  },
  props: ['skills','edit'],
  components:{
    SkillItem,
    SkillEdit
  }
}
</script>

<style scoped>
p{
  color: #007bff;
}
</style>

