import Vue from 'vue'
import Vuex from 'vuex'
import $axios from '../utils/axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{},
    DealData:{list:[]},//初始化list数组，避免getters中 state.DealData.list为undefine;
  },
  getters:{
    allCount(state){
         let count = {
           rs_kq_leave:0,ding_sbbx:0,ding_inspect:0,rs_kq_yc:0,ding_mingp:0,e_mail_ding:0,ding_artmake:0,ding_copter:0,
           ding_gorder:0,ding_inroom:0,ding_tplane:0,ding_txgj:0,ding_visit:0,ding_gift_apply:0,bcomputer_pc:0,
           ding_health_apply:0,ding_visit_vip:0,ding_work_summary:0,ding_project:0,ding_plan:0,ding_code:0,ding_buy:0,ding_pick:0,
           ding_meet_leader:0,ding_new_air_project:0,ding_work_overtime:0,ding_grade_apply:0
         };
         state.DealData.list.forEach((item)=>{
             if(item.fromtable=='rs_kq_leave'){
               count.rs_kq_leave+=1;
             }
             else if(item.fromtable=='ding_sbbx'){
               count.ding_sbbx+=1;
             }
             else if(item.fromtable=='ding_inspect'){
              count.ding_inspect+=1;
             }
             else if(item.fromtable=='rs_kq_yc'){
              count.rs_kq_yc+=1;
             }
             else if(item.fromtable=='ding_mingp'){
              count.ding_mingp+=1;
             }
             else if(item.fromtable=='e_mail_ding'){
              count.e_mail_ding+=1;
             }
             else if(item.fromtable=='ding_artmake'){
              count.ding_artmake+=1;
             }
             else if(item.fromtable=='ding_copter'){
              count.ding_copter+=1;
             }
             else if(item.fromtable=='ding_gorder'){
              count.ding_gorder+=1;
             }
             else if(item.fromtable=='ding_inroom'){
              count.ding_inroom+=1;
             }
             else if(item.fromtable=='ding_tplane'){
              count.ding_tplane+=1;
             }
             else if(item.fromtable=='ding_txgj'){
              count.ding_txgj+=1;
             }
             else if(item.fromtable=='ding_visit'){
              count.ding_visit+=1;
             }
             else if(item.fromtable=='ding_visit_vip'){
              count.ding_visit_vip+=1;
             }
             else if(item.fromtable=='ding_gift_apply'){
              count.ding_gift_apply+=1;
             }
             else if(item.fromtable=='bcomputer_pc'){
              count.bcomputer_pc+=1;
             }
             else if(item.fromtable=='ding_health_apply'){
              count.ding_health_apply+=1;
             }
             else if(item.fromtable=='ding_work_summary'){
              count.ding_work_summary+=1;
             }
             else if(item.fromtable=='ding_project'){
              count.ding_project+=1;
             }
             else if(item.fromtable=='ding_plan'){
              count.ding_plan+=1;
             }
             else if(item.fromtable=='ding_code'){
              count.ding_code+=1;
             }
             else if(item.fromtable=='ding_buy'){
              count.ding_buy+=1;
             }
             else if(item.fromtable=='ding_pick'){
              count.ding_pick+=1;
             }
             else if(item.fromtable=='ding_meet_leader'){
              count.ding_meet_leader+=1;
             }
             else if(item.fromtable=='ding_new_air_project'){
              count.ding_new_air_project+=1;
             }
             else if(item.fromtable=='ding_work_overtime'){
              count.ding_work_overtime+=1;
             }
             else if(item.fromtable=='ding_grade_apply'){
              count.ding_grade_apply+=1;
             }
         })
          Object.keys(count).forEach((item)=>{
              if(count[item]==0){
                count[item]='';
              }
          })
         return count;
     },
  },
  mutations: {
    changeUser(state,userinfo){
        state.userinfo = userinfo;
    },
    DealData(state,DealData){
       state.DealData = DealData;
    },
  },
  actions: {
    changeUser(context,userinfo){
       context.commit('changeUser',userinfo);
    },
    DealData({commit},DealData){
      commit('DealData',DealData);
    },
    dtalkLogin({commit},{code}){//通过code去换取userid等用户信息,通过userid跳转到对应的链接
       $axios({
        url:'http://dk.broad.org:8088/broad/sys/login/getDtalkUser.do',
        method:'get',
        data:{code:code},
        success(data){
          if(data.code ==200){
             commit('changeUser',data.data);
             $axios({//通过工号获取要处理事项的信息
              url:'/api/sys/dingoa/selectByUserCflagLx.do?pageNum=1&pageSize=100&dkxh=2667&cflag=0&lx=c',
              // url: '/api/sys/dingoa/selectByUserCflagLx.do?pageNum=1&pageSize=100&'+`dkxh=${data.data.jobnumber}`+'&cflag=0&lx=c',
              method: "get",
              success(data) {
                 if(data.code ==200){
                    commit('DealData',data.data);
                 }
              }
            })
          }
        }
      })
    }
  },
  modules: {
  }
})
