<template>
  <div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="javascript:void(0);" @click="edit">Edit</a></li>
        <li><a @click="save()">Save</a></li>
        <li><a @click="print">Print</a></li>
        <li><a @click="share">Share</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="javascript: void(0);"><button @click="signOut">sign out</button></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import AV from 'leancloud-storage'
import swal from 'sweetalert2'
export default {
  props:['login'],
  methods:{
    signOut(){
      AV.User.logOut()
      window.location.reload()
    },
    edit(){
      this.$bus.$emit('edit')
    },
    save(){
      this.$bus.$emit('save')
    },
    print(){
      window.print()
    },
    share(){
      let currentUserId = AV.User.current().id
      let link = window.location.origin + `/#/share?uid=${currentUserId}`
      swal(
        'Copy the following link!',
        `${link}`,
        'success'
      )
    }
  },
}
</script>

<style lang="scss" scoped>
  .nav{
    button{
      background-color: #fff;
      width: 8em;
      font-size: 16px;
      border-radius: 10px;
      font-weight: 700;
      color: red;
      border: 1px solid red;
    }
  }
</style>
