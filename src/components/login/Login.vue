<template>
  <div class="login-wrapper flex">
    <div class="container">
      <div class="col-lg-5 login">
        <form>
          <h1 class="logo">Resume Editor</h1>
          <p>New jobs, new lives</p>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control"  placeholder="Email" v-model="userName">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="password">
          </div>
          <button type="button" @click="login(userName,password)">Sign in</button>
        </form>
        <div class="tip">
          <p>Don't have an account?  <router-link to="/signup" class="signupButton">Sign up</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AV from 'leancloud-storage'
import swal from 'sweetalert2'

export default {
  data(){
    return {
      userName: '',
      password: ''
    }
  },
  methods:{
    checkForm(userName,password){
      if(userName === '' || password === ''){
        swal('请检查您的用户名和密码是否正确。')
      }
    },
    login(userName,password){
      this.checkForm(userName,password)
      AV.User.logIn(userName, password).then((loggedInUser) => {
        swal({
          type: 'success',
          title: '登录成功！',
          text: '登录成功！',
          footer: '<a href=""><router-link to="/login" class="signinButton">点击按钮，跳转首页。</router-link> </a>',
        })
        window.location = 'http://127.0.0.1:8080/#/'
      }, (error) => {
        if(error.code === 211){
          swal('用户名不存在，请注册。')
        }else if(error.code === 210){
          swal('用户名与密码不匹配，请重新输入。')
        }
      });
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
$color:#007bff;
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
  .container{
    display: flex;
    justify-content: center;
    form{
      border: 1px solid $color;
      padding: 20px 20px 30px ;
      border-radius: 10px;
      h1{
        font-size: 28px;
        margin: 0;
        padding: 0;
        text-align: left;
        font-style: italic;
        font-weight: 700;
        color: $color;
      }
      p{
        text-align: right;
        font-size: 14px;
        color: $color;
      }
      .form-group{
        label{
          float: left;
          font-size: 16px;
        }
        input{
          border: 1px solid $color;
        }
      }
      button{
        width: 100%;
        padding: 6px;
        border-radius: 10px;
        background-color: $color;
        color: #fff;
        font-size: 16px;
        border: 1px solid $color;
        font-weight: 700;
        margin-top: 20px;
      }
    }
  }
}
.login-wrapper {
  width: 100%;
  height: 100vh;
  background: url("../../assets/bg.png") center center no-repeat;
  background-size: cover;
  form {
    background: #FFFFFF;
  }
}
.tip{
  border: 1px solid $color;
  border-radius: 6px;
  background: #fff;
  margin-top: 36px;
  padding: 12px;
  p{
    font-weight: 700;
    font-size: 18px;
    margin: 0;
  }
}
.signupButton{
  color: #007bff;
}
</style>
