<template>
  <div class="row">
    <ul class="clearfix">
      <li v-for="(item,index) in title" v-bind:key="index" class="col-12 col-md-6 col-lg-2">
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">{{item}}</span>
          <input type="text" class="form-control" aria-describedby="basic-addon1" v-bind:value="contacts[item]" @input="updateContact(item,$event)">
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data(){
    return {
      title:['QQ','WeChat','Tel','Mail','Blog','Github']
    }
  },
  props:['contacts',],
  methods:{
    updateContact(title,event){
      let value = event.target.value
      this.$bus.$emit('updateContact',title,value)
    }
  }
}
</script>

<style scoped>
.input-group{
  margin: 10px auto;
}
.input-group > span{
  padding: 0;
  width: 4em;
}
ul{
  border: 1px solid #007bff;
  border-radius: 6px;
  padding: 8px 0;
}
</style>


