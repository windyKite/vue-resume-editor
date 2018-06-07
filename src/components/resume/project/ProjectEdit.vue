<template>
<div v-show="false">
  <div class="row">
    <ul>
      <li v-for="(item, index) in works" v-bind:key="index"  class="col-lg-4 col-12 col-md-6 col-xs-12 skillItem">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">作品</span>
              <input type="text" class="form-control" aria-describedby="basic-addon1" v-bind:value="item.name" @input="updateWorkName(`${index}`,$event)">
            </div>
            <div class="input-group link">
              <span class="input-group-addon" id="basic-addon1">链接</span>
              <input type="text" class="form-control" aria-describedby="basic-addon1" v-bind:value="item.link" @input="updateWorkLink(`${index}`,$event)">
            </div>
          </div>
          <div class="panel-body skillIntroduction">
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">描述</span>
              <textarea class="form-control" rows="10" v-bind:value="item.desc" @input="updateWorkDesc(`${index}`,$event)"></textarea>
            </div>
          </div>
          <div class="panel-footer" @click="deleteWork(`${index}`)">Delete</div>
        </div>
      </li>
    </ul>
  </div>
  <div><button class="btn btn-default" @click="addWork">Add Project</button></div>
</div>
</template>

<script>
export default {
  props:['works'],
  methods:{
    updateWorkName(index, event){
      let value = event.currentTarget.value
      this.$bus.$emit('updateWorkName',index,value)
    },
    updateWorkDesc(index, event){
      let value = event.currentTarget.value
      this.$bus.$emit('updateWorkDesc',index,value)
    },
    updateWorkLink(index, event){
      let value = event.currentTarget.value
      this.$bus.$emit('updateWorkLink',index,value)
    },
    deleteWork(index){
      this.$bus.$emit('deleteWork',index)
    },
    addWork(){
      this.$bus.$emit('addWork',{name: '', link: '', desc: ''})
    }
  }
}
</script>

<style scoped>
.link{
  margin-top: 10px;
}
.btn{
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
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
