<template>
<div v-show="true">
  <div class="row">
    <ul>
      <li v-for="(item,index) in skills" v-bind:key="index"  class=" col-lg-4 col-12 col-md-6 col-xs-12 skillItem">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">技能</span>
              <input type="text" class="form-control" aria-describedby="basic-addon1" v-bind:value="item.name" @input="updateSkillName(`${index}`,$event)">
            </div>
          </div>
          <div class="panel-body skillIntroduction">
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">描述</span>
              <textarea class="form-control" rows="10" v-bind:value="item.desc" @input="updateSkillDesc(`${index}`,$event)"></textarea>
            </div>
          </div>
          <div class="panel-footer" @click="deleteSkill(`${index}`)">Delete</div>
        </div>
      </li>
    </ul>
  </div>
  <div>
    <button class="btn btn-default" @click="addSkill">Add Skill</button>
  </div>
</div>
</template>

<script>
export default {
  props: ['skills'],
  methods:{
    updateSkillName(index,event){
      let value = event.currentTarget.value
      this.$bus.$emit('updateSkillName',index,value)
    },
    updateSkillDesc(index, event){
      let value = event.currentTarget.value
      this.$bus.$emit('updateSkillDesc',index,value)
    },
    addSkill(){
      this.$bus.$emit('addSkill',{name: '', desc: ''})
    },
    deleteSkill(index){
      this.$bus.$emit('deleteSkill',index)
    }
  }
}
</script>

<style scoped>
textarea{
  resize: none;
}
button{
  width: 100%;
  font-size: 18px;
  padding: 10px;
}
.panel{
  border: 1px solid #007bff;
}
.panel-heading,.panel-footer{
  background-color: #e3f2fd;
}
.panel-footer{
  color: #007bff;
  font-size: 16px;
  cursor: pointer;
}
.btn{
  border: 1px solid #007bff;
  color: #007bff;
  font-weight: bold;
}
</style>
