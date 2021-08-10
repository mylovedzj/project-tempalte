<template>
  <div class="work">
        <div class="titles" v-if="showTitle">考评相关</div>
        <div class="work_item">
          <div @click="toLocation(1)" class="item_son">
            <van-badge :content="''">
                <img alt="Vue logo" src="../assets/workPlan1.jpg">
            </van-badge>
              <span>待批工作</span>
          </div>
         <div @click="toLocation(25)" class="item_son">
            <van-badge :content="allCount.ding_work_summary">
                <img alt="Vue logo" src="../assets/zj.jpg">
            </van-badge>
              <span>工作总结</span>
        </div>
         <div @click="toLocation(35)" class="item_son">
           <van-badge :content="''">
               <img alt="Vue logo" src="../assets/ydyyzy_bt_43.jpg">
           </van-badge>
              <span>周计划</span>
        </div>
    </div>
     <div class="work_item">
          <div @click="toLocation(26)" class="item_son">
            <van-badge :content="''">
                <img alt="Vue logo" src="../assets/pj.jpg">
            </van-badge>
             <span>员工评级</span>
          </div>
    </div>
  </div>
</template>

<script>
import {link,itemObject} from '../utils/link';
import {mixin} from '../utils/mixin';
import { Badge} from 'vant';
import $function from '../utils/function';
export default {
  name: 'work',
  mixins:[mixin],
  props: {
    msg: String
  },
  components:{
     [Badge.name]:Badge
  },
  computed:{
   allCount(){
       return this.$store.getters['allCount'];
    },
  },
  methods:{
    toLocation(num){
       let userinfo = this.$store.state.userinfo;
       let itemCount= JSON.parse($function.getLocationStorage('itemCount'));
       if(itemCount==null || itemCount.length==0){
           itemCount = itemObject;
           itemCount[num-1].count =1;
       }
       else{
          itemCount.forEach((item,index) => {
          if(item.id == num){
             itemCount[index].count++;
            }
         });
       }
       $function.setLocationStorage('itemCount',JSON.stringify(itemCount));
      // console.log(JSON.parse($function.getLocationStorage('itemCount')));
       if(num==1){
          window.location.href = link[num-1]+`?userid=${userinfo.userid}`;
       }
       else{
          window.location.href = link[num-1]+`${userinfo.jobnumber}`;
       }
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
