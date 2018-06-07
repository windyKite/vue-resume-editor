<template>
  <div>
    <Navigation v-bind:login="login" v-bind:edit="edit"></Navigation>
    <resume v-bind:resume="resume" v-bind:edit="edit"></resume>
  </div>
</template>

<script>
import AV from 'leancloud-storage'
import Navigation from '@/components/navigation/Navigation.vue'
import Resume from '@/components/resume/Resume.vue'
import swal from 'sweetalert2'

export default {
  name: 'App',
  data(){
    return {
      login: false,
      edit: false,
      save: false,
      share: false,
      refresh: true,
      currentUser: null,
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
      },
      defaultResume: {
        name: 'Hello!',
        intros: 'Welcome to online resume editor! If you want to make your resume, please click the 【Sign in】 button upper right.',
        contacts: {
          QQ: '12345567890',
          WeChat: 'wechatID',
          Tel: '18888888888',
          Mail: 'example@mail.com',
          Blog: 'http://bdfgfdgdfglog.com/',
          Github: 'http://github.com/'
        },
        skills: [
          {name: 'HTML', desc: '熟练掌握 HTML ...'},
          {name: 'CSS', desc: '熟练掌握 CSS...'},
          {name: 'JavaScript', desc: '熟练掌握 JavaScript...'}
        ],
        works: [
          {name: 'HTML', link: 'http://example.html.com', desc: 'HTML 作品...'},
          {name: 'CSS', link: 'http://example.css.com', desc: 'CSS 作品...'},
          {name: 'JavaScript', link: 'http://example.javascript.com', desc: 'JavaScript 作品...'},
        ]
      }
    }
  },
  methods: {
    initData(){
      let currentUser = AV.User.current()
      if (currentUser) {
        this.login = true
        this.currentUser = currentUser
        // this.resume = this.defaultResume
        this.getResume(currentUser)
      }else{
        this.resume = this.defaultResume
      }
    },
    getResume(user){
      let query = new AV.Query('User')
      return query.get(user.id).then((user)=>{
        let {resume} = user.attributes
        this.resume = resume
      },(y)=>{
        console.log(y)
      })
    }
  },
  created(){
    this.initData()
    this.$bus.$on('edit',()=>{
      this.edit = !this.edit
    })
    // this.$bus.$on('signOut',(data)=>{
    //   this.login = false
    //   this.currentUser = null
    // })
    this.$bus.$on('updateName',(data)=>{
      this.resume.name = data
    })
    this.$bus.$on('updateIntros',(data)=>{
      this.resume.intros = data
    })
    this.$bus.$on('updateContact', (title,value)=>{
      this.resume.contacts[title] = value
    })
    this.$bus.$on('updateSkillName', (index,value)=>{
      this.resume.skills[index].name = value
    })
    this.$bus.$on('updateSkillDesc',(index,value)=>{
      this.resume.skills[index].desc = value
    })
    this.$bus.$on('addSkill',(skill)=>{
      this.resume.skills.push(skill)
    })
    this.$bus.$on('deleteSkill',(index)=>{
      this.resume.skills.splice(index,1)
    })
    this.$bus.$on('uupdateWorkName', (index,value)=>{
      this.resume.works[index].name = value
    })
    this.$bus.$on('updateWorkDesc', (index,value)=>{
      this.resume.works[index].desc = value
    })
    this.$bus.$on('updateWorkLink', (index,value)=>{
      this.resume.works[index].link = value
    })
    this.$bus.$on('deleteWork',(index)=>{
      this.resume.works.splice(index,1)
    })
    this.$bus.$on('addWork',(work)=>{
      this.resume.works.push(work)
    })
    this.$bus.$on('save',()=>{
      let currentUser = AV.User.current()   
      let user = AV.Object.createWithoutData('_User', currentUser.id)
      user.set('resume', this.resume)
      user.save().then((sucess)=>{
        swal('保存成功。')
      })
    })
  },
  components: {
    Navigation,
    Resume
  }
}
</script>