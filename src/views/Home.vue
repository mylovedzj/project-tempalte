<template>
  <div class="bgBox">
      <div class="home">
        <van-search
          v-model="value"
          shape="round"
          background="#4fc08d"
          placeholder="请输入搜索的模块"
          @input="onSearch"
        />
         <div class="imgBox">
            <img src="../assets/ydyyzy_banner.jpg" alt="">
         </div>
         <div v-if="countFlag">
            <div class="titles">最近常用</div>
            <div class="work_item">
                  <div class="item_son" v-for="item in itemCount" :key="item.id" @click="toLocation(item.url)">
                      <img :src="item.img" alt="">
                      <span>{{item.title}}</span>
                  </div>
            </div>
         </div>
         <div class="line"></div>
         <transition name="fade">
               <component v-bind:is="currentTabComponent"></component>
         </transition>
         <div v-if="!Tabshow">
            <Component-Check></Component-Check>
            <Component-office></Component-office>
            <Component-others></Component-others>
         </div>
      </div>
      <van-tabbar v-model="active" @change="onChange" v-if="Tabshow">
         <van-tabbar-item icon="home-o">考评</van-tabbar-item>
         <van-tabbar-item icon="underway-o">考勤</van-tabbar-item>
         <van-tabbar-item icon="friends-o">行政</van-tabbar-item>
         <van-tabbar-item icon="font-o">其他</van-tabbar-item>
      </van-tabbar>
    <van-overlay :show="overShow" @click="overShow = false" :z-index="99">
      <div class="overBox" >
           <div class="overitem" v-for="(item,index) in overArray" :key="index" @click="toLocation(item.url)">
               <img :src= "item.img" alt="">
               <span>{{item.title}}</span>
           </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Badge,Overlay, Field, Tabbar, TabbarItem,Search} from 'vant';
import Work from  '../components/workPlan.vue';
import checkWork from  '../components/checkWork.vue';
import office from  '../components/office.vue';
import others from  '../components/others.vue';
import $axios from '../utils/axios';
import $function from '../utils/function';
import {itemObject} from '../utils/link';

export default {
  name: 'Home',
  data(){
    return{
      countFlag:false,//控制最近常用
      userinfo:{},
      active: 0,
      Tabshow:true,
      overShow:false,
      overArray:[],
      itemCount:[],
      value:'',
      currentTabComponent:'Component-Work',
      choosetab:{isFlag1:true,isFlag2:false,isFlag3:false,isFlag4:false},
    }
  },
  components: {
    'Component-Work':Work,
    'Component-Check':checkWork,
    'Component-office':office,
    'Component-others':others,
    [Badge.name]:Badge,
    [Overlay.name]:Overlay,
    [Field.name]:Field,
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
    [Search.name]:Search,
  },
  created(){
     if($function._isMobile()){
        this.Tabshow = true;
     }
     else{
        this.Tabshow = false;
     }
  },
  mounted(){
     this.oftenUse();
  },
  methods:{
   toLocation(url){//搜索跳转
     let userinfo = this.$store.state.userinfo;
     //alert(this.userinfo.userid)
     if(url.indexOf('xm={name}&dkxh={jobnumber}')!=-1){
       document.location.href =url.replace('xm={name}&dkxh={jobnumber}',`xm=${userinfo.name}&dkxh=${userinfo.jobnumber}`);
     }
     else if(url.indexOf('{jobnumber}')!=-1){
        document.location.href =url.replace('{jobnumber}',`${userinfo.jobnumber}`);
     }
     else if(url.indexOf('{userid}')!=-1){
        document.location.href = url.replace('{userid}',`${userinfo.userid}`);
     }
     else{
         document.location.href = url;
     }
   },
   countLocation(url){

   },
   oftenUse(){
       let itemCount= JSON.parse($function.getLocationStorage('itemCount'));
       if(itemCount==null || itemCount.length ==0){
         return
       }
      for(let i=0;i<itemCount.length-1;i++){//降序排列
        for(let j=i+1;j<itemCount.length;j++){
           if(itemCount[i].count<itemCount[j].count){
              let obj = itemCount[i];
              itemCount[i]  =itemCount[j];
              itemCount[j] = obj;
           }
        }
      }
     for(let i=0;i<3;i++){
       if(itemCount[i].count !==0){
           this.itemCount.push(itemCount[i]);
       }
     }
     if(this.itemCount.length>0){
       this.countFlag = true;
     }
   },
   onChange(index) {//手机端tab切换
      //console.log(index)
      switch(index){
         case 0:
         this.currentTabComponent = 'Component-Work';
          break;
           case 1:
         this.currentTabComponent = 'Component-Check';
          break;
           case 2:
         this.currentTabComponent = 'Component-office';
          break;
           case 3:
         this.currentTabComponent = 'Component-others';
          break;
      }
    },
    onSearch(val) {//搜索功能
      let _this = this;
      _this.overArray = [];
      if(val==''){
         _this.overShow = false;
        return
      }
      itemObject.forEach((item)=>{
        if(item.title.indexOf(val)!=-1){
            _this.overArray.push(item);
            _this.overShow = true;
         }
      })
    },
    touchMove(){//滑动展示日历
      let _this = this;
      let body = document.getElementsByTagName('body')[0];
      let startX = 0;
      body.addEventListener('touchstart', function (e) {
             startX = e.touches[0].clientX;
        })
     body.addEventListener('touchmove', function (e) {
            let distance = e.touches[0].clientX -startX;
            if(distance<-150){
              _this.$router.push({path:'calendar'})
            }
             
        })
    },
  }
}
</script>
<style lang="scss" scoped>
</style>