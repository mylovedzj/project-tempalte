<template>
    <div>
         <div id="calendarEl">
         </div>
    </div>
</template>
<script>
import { Overlay, Field} from 'vant';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
export default {
   data(){
       return {
            value: '',//记录事项
            timeObject:{},//events中的时间对象
            info:{},//单击日期函数的参数对象
            events:[//日历事件数组
                {
                    id: 'a',
                    title: 'my hhh',
                    start: '2021-07-26',
                }
            ],
       }
   },
   created(){

   },
   components:{
       [Overlay.name]:Overlay,
   },
   computed:{
       eventList(){
           return list = this.$store.DealData.list;
       }
   },
   methods:{
        initcalendar(){ //日历初始化
        let _this = this;
        let calendar = new Calendar(calendarEl, {
        plugins: [ dayGridPlugin, timeGridPlugin, listPlugin,interactionPlugin],
        initialView: 'dayGridMonth',
        editable: true,
        headerToolbar: {
            left: 'prev,next',
            // center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
        },
        timeZone: 'local',
        events:_this.events,
        selectable: true,
        dateClick:function(info){
            _this.info = info;
            console.log(info.dateStr);
            }
        });
        calendar.render();
      },
    touchMove(){
    let _this = this;
      let body = document.getElementsByTagName('body')[0];
      let startX = 0;
      body.addEventListener('touchstart', function (e) {
             startX = e.touches[0].clientX;
        })
      body.addEventListener('touchmove', function (e) {
            let distance = e.touches[0].clientX -startX;
            if(distance>150){
                _this.$router.push({path:'/'});
            }
        })
     },
   },
  created(){
     //this.getNavlink();
       this.touchMove();  
  },
   mounted(){
        this.initcalendar(); 
   },
}
</script>
<style lang="scss" scoped>

</style>