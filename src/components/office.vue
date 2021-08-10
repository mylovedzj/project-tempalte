<template>
  <div class="work">
          <div class="titles" v-if="showTitle">行政相关</div>
        <div class="work_item">
          <div @click="toLocation(10)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_9.jpg">
                <span>名片申请</span>
          </div>
         <div @click="toLocation(7)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_6.jpg">
              <span>举报投诉</span>
        </div>
         <div @click="toLocation(8)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_21.jpg">
              <span>总裁信箱</span>
        </div>
    </div>
     <div class="work_item">
          <div @click="toLocation(15)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_18.jpg">
                <span>订票申请</span>
          </div>
         <div @click="toLocation(16)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_19.jpg">
              <span>入住申请</span>
        </div>
         <div @click="toLocation(18)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_16.jpg">
              <span>直升机申请</span>
        </div>
    </div>
    <div class="work_item">
          <div @click="toLocation(19)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_23.jpg">
                <span>转正申请</span>
          </div>
         <div @click="toLocation(23)" class="item_son"> 
              <img alt="Vue logo" src="../assets/c.png">
              <span>礼品管理</span>
        </div>
         <div @click="toLocation(24)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_28.jpg">
              <span>低碳出行</span>
        </div>
    </div>
     <div class="work_item">
          <div @click="toLocation(28)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_33.jpg">
                <span>空气发票</span>
          </div>
         <div @click="toLocation(30)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_36.jpg">
              <span>电脑台帐</span>
        </div>
         <div @click="toLocation(31)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_371.jpg">
              <span>约见总裁</span>
        </div>
    </div>
      <div class="work_item">
          <div @click="toLocation(32)" class="item_son">
                <img alt="Vue logo" src="../assets/ydyyzy_bt_38.jpg">
                <span>文件制度</span>
          </div>
         <div @click="toLocation(33)" class="item_son">
              <img alt="Vue logo" src="../assets/ydyyzy_bt_35.jpg">
              <span>钉钉领料</span>
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
           if(num<=18){
                 window.location.href = link[num-1]+`?userid=${userinfo.userid}`;
           }
           else if(num<=30){
                 window.location.href = link[num-1]+`${userinfo.jobnumber}`;
           }
           else{
                window.location.href = link[num-1]; 
           }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
