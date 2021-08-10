import $function from './function'
let mixin = {
  data(){
      return{
          showTitle:false
      }
  },
  created(){
      if($function._isMobile()){
          this.showTitle = false;
      }
      else{
          this.showTitle = true;
      }
  }
}
export {mixin};