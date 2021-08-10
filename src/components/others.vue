<template>
  <div class="work">
        <div class="titles" v-if="showTitle">其他</div>
        <div class="work_item">
          <div @click="toLocation(6)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_7.jpg">
                <span>互联网邮箱</span>
          </div>
         <div @click="toLocation(9)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_8.jpg">
              <span>通信工具申请</span>
        </div>
         <div @click="toLocation(11)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_10.jpg">
              <span>远大城报修单</span>
        </div>
    </div>
     <div class="work_item">
          <div @click="toLocation(12)" class="item_son">
                <img alt="Vue logo" src="../assets/wx.jpg">
                <span>可建城报修单</span>
          </div>
            <div @click="toLocation(13)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_11.jpg">
                <span>远大客餐单</span>
          </div>
            <div @click="toLocation(14)" class="item_son">
                <img alt="Vue logo" src="../assets/ct.jpg">
                <span>可建客餐单</span>
          </div>
    </div>
     <div class="work_item">
          <div @click="toLocation(20)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_29.jpg">
                <span>客人通行预约</span>
          </div>
            <div @click="toLocation(21)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_26.jpg">
                <span>年会论坛报名</span>
          </div>
         <div @click="toLocation(27)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_22.jpg">
                <span>远大城考察</span>
          </div>
    </div>
    <div class="work_item">
          <div @click="toLocation(17)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_17.jpg">
                <span>美术设计制作</span>
          </div>
         <div @click="toLocation(29)" class="item_son">
            <img alt="Vue logo" src="../assets/ydyyzy_bt_34.jpg">
            <span>代销产品立项</span>
        </div>
         <div @click="toLocation(34)" class="item_son">
            <img alt="Vue logo" src="../assets/ydyyzy_bt_41.jpg">
            <span>拷图</span>
          </div>
    </div>
  </div>
</template>

<script>
import {link,itemObject} from '../utils/link';
import {mixin} from '../utils/mixin';
import $function from '../utils/function';
export default {
  name: 'work',
  mixins:[mixin],
  props: {
    msg: String
  },
  methods:{
      toLocation(num){
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
       if(num>=9 && num <=17 ){
            window.location.href = link[num-1]+`?userid=${userinfo.userid}`; 
       }
       else if(num==21 || num==27 || num==29 || num==34){
              window.location.href = link[num-1]+`${userinfo.jobnumber}`; 
       }
       else{
              window.location.href = link[num-1];
        }
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
