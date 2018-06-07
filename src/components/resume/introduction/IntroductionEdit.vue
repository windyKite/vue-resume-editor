<template>
  <div>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">姓名</span>
      <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" v-bind:value="name" @input="updateName">
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">简介</span>
      <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" v-bind:value="intros" @input="updateIntros">
    </div>
  </div>
</template>

<script>
export default {
  props:['name','intros'],
  methods:{
    updateName(event){
      let data = event.target.value
      this.$bus.$emit('updateName',data)
    },
    updateIntros(event){
      let data = event.target.value
      this.$bus.$emit('updateIntros',data)
    }
  }
}
</script>

<style scoped>
.input-group{
  margin-bottom: 20px;
}
</style>

