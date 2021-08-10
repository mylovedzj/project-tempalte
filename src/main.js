import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $function from './utils/function';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {//防止双击放大
  var now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);
document.documentElement.addEventListener('touchstart', function (event) {//防止双指放大
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);
function browserRedirect(){//判断是移动端还是桌面端
  if ($function._isMobile()){
    require('../src/style/mobile/home.scss');
    require('../src/style/mobile/work.scss');
  }
  else{
    require('../src/style/PC/home.scss');
    require('../src/style/PC/work.scss');
  }
  return 1;
}
Vue.use(ElementUI);
new Promise((resolve,reject)=>{
  if(browserRedirect()==1) resolve();
}).then(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}).catch((e)=>{
  console.log(e);
})

