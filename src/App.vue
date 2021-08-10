<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import $axios from './utils/axios';
import * as dd from "dingtalk-jsapi";
import $vant from './utils/vant';
import $function from './utils/function';

export default {
  data(){
    return {
      userid:'',
      configData:{},
    }
  },
  created(){
      this.loginDtalk('L640');
  },
  mounted(){
       
  },
  methods:{
     loginDtalk(dkxh) {//dkxh为员工卡号    //获取免登参数(鉴权)
        let _this = this;
        let configPromise = new Promise((resolve,reject)=>{
            $axios({
            url: "/api/sys/login/getConfigs.do",
            method: "get",
            data:{url:location.href},
            success(data) {
                if(data.code ==200){
                    _this.configData = data.data;
                    dd.config({
                    agentId : data.data.agentid,
                    corpId : data.data.corpId,
                    timeStamp : data.data.timeStamp,
                    nonceStr : data.data.nonceStr,
                    signature : data.data.signature,
                    jsApiList : [ 'runtime.info', 'biz.contact.complexPicker', 'biz.contact.departmentsPicker', 'device.base.getUUID' ]
                  })
                  dd.error(function (err) {
                        alert('dd error: ' + JSON.stringify(err));
                    })
                  resolve(data.data);
                }

              },
            })
        })

      // if (dd.env.platform === 'notInDingTalk') {// 判断是否在钉钉浏览器
      //     $vant.confirm({message:'请在钉钉浏览器中打开'})
      //     return
      //  }

      configPromise.then((configData)=>{
        dd.ready(//免登
          function() {
              dd.runtime.permission.requestAuthCode({
                  corpId:configData.corpId,//企业pid
                  onSuccess: function(res) {//res.code为员工卡号
                 // alert(res.code);
                  this.getDtalkUserInfo(res.code);
                  }.bind(this),
                  onFail: function(err) {
                    alert('dd error: ' + JSON.stringify(err));
                  }
          })}.bind(this)
        )
      })
      
   },
  getDtalkUserInfo(code) {  // 获取钉钉用户信息
            if(code.length < 8) {   // 卡号识别
                this.dtalkLogin(code);
                return
            }
            this.$store.dispatch('dtalkLogin',{code});
           // this.dtalkLogin(code);
        },
  },
}
</script>
<style lang="scss">
*{
  padding:0;
  margin: 0;
}
body{
  padding:0;
  margin: 0;
  overflow:scroll;
}
</style>
