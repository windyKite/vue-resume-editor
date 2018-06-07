<template>
  <div class="row">
    <h1>联系</h1>
    <p>Contact Information</p>
    <div class="col-12"  v-show="!edit">
      <div class="contactList">
        <ul class="clearfix">
          <li class="col-12 col-md-6 col-lg-2">
            <i class="iconfont icon-qq"></i>
            <span>{{contacts.QQ}}</span>
          </li>
          <li class="col-12 col-md-6 col-lg-2">
            <i class="iconfont icon-wechat"></i>
            <span>{{contacts.WeChat}}</span>
          </li>
          <li class="col-12 col-md-6 col-lg-2">
            <i class="iconfont icon-phone"></i>
            <span><a v-bind:href="tel">{{contacts.Tel}}</a></span>
          </li>
          <li class="col-12 col-md-6 col-lg-2">
            <i class="iconfont icon-email"></i>
            <span><a v-bind:href="mail">{{contacts.Mail}}</a></span>
          </li>
          <li class="col-12 col-md-6 col-lg-2">
            <i class="iconfont icon-blog"></i>
            <span><a v-bind:href="contacts.Blog">{{contacts.Blog}}</a></span>
          </li>
          <li class="col-12 col-md-6 col-lg-2">
            <i class="iconfont icon-github"></i>
            <span><a v-bind:href="contacts.Github" target="_blank">{{contacts.Github}}</a></span>
          </li>
        </ul>
      </div>
    </div>
    <contact-edit v-show="edit" v-bind:contacts="contacts"></contact-edit>
  </div>
</template>

<script>
import ContactEdit from '@/components/resume/contact/ContactEdit'
export default {
  name: 'Contact',
  props:['contacts','edit'],
  computed:{
    mail(){
      return 'mailto:' + this.contacts.Mail
    },
    tel(){
      return 'tel:' + this.contacts.tel
    }
  },
  components:{
    ContactEdit
  }
}
</script>

<style scoped>
.contactList > ul > li{
  display: flex;
  justify-content: center;
  align-items: center;
}
.contactList > ul > li > span{
  overflow: hidden;
}
.row ul{
  border: 1px solid #007bff;
  padding: 10px 0;
  border-radius: 6px;
}
p{
  color: #007bff;
}
span{
  padding-left: 6px;
}
@media (max-width:767px){
  .contactList{
    padding: 0 16px;
  }
}
</style>
