<template>
  <div class="about">
    ss
  </div>
</template>
<script>

import {Button,Cell,CellGroup,Icon} from 'vant';
import { error } from 'dingtalk-jsapi';
let s = new Set([1,2,5,5,5]);
let s1 = Array.from(s);
let name ='asdfgh';
let arr = [1,2,3,4,8,10,5];
let arr1 = arr.filter((item)=>{
   return item >3;
})
console.log(arr1);
let person = {name:'zhijian'};
let handle= {
   get(target,prokey){
      if(prokey in target){
        return target[prokey];
      }
      else throw new Error ('没有该属性');
   },
   set(target,prokey,value){
      console.log('设置新值');
      target[prokey] = value;
      return true;
   }
};
let proxy = new Proxy(person,handle);
proxy.age = 26;
console.log(proxy.age)
console.log(person.age)
export default {
  data(){
    return {
      name:''
    }
  },
  components:{
      [Button.name]:Button,
      [Cell.name]:Cell,
      [Icon.name]:Icon,
  },
  created(){
    this.testapi();
    let Obj = {foo:'213',baz:'000'};
    let {foo:a,baz:b} = Obj;
    let {log} = console;
   // log(`a=${a},b=${b}`);
  },
  mounted(){
    
  },
  methods:{
    testapi(){
         let _this = this;
         this.$http.post('http://192.9.214.35:3000/users/a').then((Response)=>{
             _this.name = Response.data.name;
          }).catch((response)=>{
            console.log(response);
      })
    },
    testbutton(event){
        console.log(event);
    }
  }
}
</script>
