<template>
  <resume v-bind:resume="resume"></resume>
</template>

<script>
import Resume from '@/components/resume/Resume'
import swal from 'sweetalert2'
import AV from 'leancloud-storage'
export default {
  data(){
    return {
      resume: {
        name:'',
        intros:'',
        contacts:{
          QQ:'',
          WeChat:'',
          Tel:'',
          Mail:'',
          Blog:'',
          Github:''
        },
        skills:[],
        works:[]
      }
    }
  },
  components:{
    Resume
  },
  methods:{
    checkShareUser(){
      let url = window.location
      if(url.href.indexOf('uid') === -1){
        swal('URL中没有用户分享信息。将为您跳转首页').then(()=>{
          window.location = url.href + '1'
        })
      }else{
        this.getResume()
      }
    },
    getResume(){
      let userId = this.getUserId()
      let query = new AV.Query('_User');
      query.get(userId).then((user) => {
        this.resume = user.attributes.resume
      }, (error) => {
        console.log(error)
      });
    },
    getUserId(){
      let query = window.location.href.split('?').filter((string)=>{
        return string.indexOf('uid') !== -1
      })
      let userId = decodeURIComponent(query).split('&').filter(string => string.indexOf('uid')!== -1)[0].split('=')[1]
      return userId
    }
  },
  created(){
    this.checkShareUser()
  }
}
</script>
