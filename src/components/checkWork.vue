<template>
  <div class="work">
      <div class="titles" v-if="showTitle">考勤相关</div>
      <div class="work_item">
        <div @click="toLocation(2)" class="item_son">
            <van-badge :content="allCount.rs_kq_yc">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_5.jpg">
            </van-badge>
            <span>考勤异常</span>
        </div>
         <div @click="toLocation(3)" class="item_son">
             <van-badge :content="allCount.rs_kq_leave">
                 <img alt="Vue logo" src="../assets/ydyyzy_bt_3.jpg">
              </van-badge>
              <span>外出申请</span>
        </div>
         <div @click="toLocation(4)" class="item_son"> 
             <van-badge :content="allCount.rs_kq_leave">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_4.jpg">
              </van-badge>
              <span>请假单</span>
        </div>
    </div>
     <div class="work_item">
          <div @click="toLocation(5)" class="item_son">
              <van-badge :content="allCount.rs_kq_leave">
                  <img alt="Vue logo" src="../assets/ydyyzy_bt_2.jpg">
              </van-badge>
              <span>出差单&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
         <div @click="toLocation(22)" class="item_son">
            <van-badge :content="''">
               <img alt="Vue logo" src="../assets/ydyyzy_bt_32.jpg">
             </van-badge>
             <span>疫情处理</span>
        </div>
        <div class="item_son">
          <i></i>
          <span></span>
        </div>
    </div>
  </div>
</template>

<script>
import {link,itemObject} from '../utils/link';
import {mixin} from '../utils/mixin'
import { Badge} from 'vant';
import $function from '../utils/function';
export default {
  mixins:[mixin],
  name: 'work',
  props: {
    msg: String
  },
  created(){
    
  },
  computed:{
    allCount(){
       return this.$store.getters['allCount'];
    }
  },
  components:{
     [Badge.name]:Badge
  },
  methods:{
      toLocation(num){//跳转到对应的地址
       let userinfo = this.$store.state.userinfo;
       let itemCount= JSON.parse($function.getLocationStorage('itemCount'));
       if(itemCount==null || itemCount.length ==0){
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
       window.location.href = link[num-1]+`?xm=${userinfo.name}&dkxh=${userinfo.jobnumber}`;
      }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
