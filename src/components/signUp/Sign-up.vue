<template>
  <div class="login-wrapper flex">
    <div class="container">
      <div class="col-lg-5 login">
        <form>
          <h1 class="logo">Resume Editor</h1>
          <p>New jobs, new lives</p>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="userName" v-model="userName">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" v-model="password">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Confirm Password</label>
            <input type="password" class="form-control"  placeholder="Confirm Password" name="confirmation_password" v-model="confirmation_password">
          </div>
          <button type="button" @click="signUp(userName,password,confirmation_password)">Sign up</button>
        </form>
        <div class="tip">
          <p>Already have an account?  <router-link to="/login" class="signinButton">Sign in</router-link>  </p>
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
      password: '',
      confirmation_password: '',
    }
  },
  methods: {
    checkFormData(userName,password,confirmation_password){
      if(userName === ''){
        swal({
          type: 'error',
          title: '用户名出错！',
          text: '请检查您的用户名。',
        })
        return 
      }else if(password === '' || confirmation_password === ''){
        swal({
          type: 'error',
          title: '密码出错！',
          text: '请检查您的密码，密码不能为空。',
        })
        return 
      }else if(password !== confirmation_password){
        swal({
          type: 'error',
          title: '密码出错！',
          text: '请检查您两次输入密码是否一致。',
        })
        return 
      }
      return true
    },
    signUp(userName,password,confirmation_password){
      if(this.checkFormData(userName,password,confirmation_password)){
        // 新建 AVUser 对象实例
        let user = new AV.User();
        // 设置用户名
        user.setUsername(userName);
        // 设置密码
        user.setPassword(password);
        // 设置邮箱
        user.setEmail(userName);
        user.signUp().then( (loggedInUser) => {
          swal({
            type: 'success',
            title: '注册成功！',
            text: '注册成功，已经自动登录！',
            footer: '<a href=""><router-link to="/login" class="signinButton">点击按钮，跳转首页。</router-link> </a>',
          })
          // window.history.length > 1 ? this.$router.go(-1): this.$router.push('/')
          window.location = '/'
        }, (error) => {
          console.log(error)
        });
      }
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
.signButton{
  color: #007bff;
}
</style>