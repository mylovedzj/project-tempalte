let link = [
'http://dk.broad.org:8088/ddtalkxx/oamessage/query.do',//待批工作1
'http://dk.broad.org:8088/ddtalkxx/feedback/query.do',//考勤异常2
'http://dk.broad.org:8088/ddtalkxx/goout/querywc.do',//外出申请3
'http://dk.broad.org:8088/ddtalkxx/goout/queryqj.do',//请假单4
'http://dk.broad.org:8088/ddtalkxx/goout/querycc.do',//出差单5
'http://dk.broad.org:801/plan/#/ddAuth/oth/mail/addMail',//互联网邮箱6
'http://dk.broad.org:8088/ddtalkxx/complaint/complaint.jsp',//举报投诉7
'http://dk.broad.org:8088/ddtalkxx/ceomail/ceomail.jsp',//总裁信箱8
'http://dk.broad.org:8088/ddtalkxx/applyuntool/untoolapply.jsp',//通信工具申请9
'http://dk.broad.org:8088/ddtalkxx/applybcard/bcardapply.jsp',//名片申请10
'http://dk.broad.org:8088/ddtalkxx/repair/repair.jsp',//远大城报修单11
'http://dk.broad.org:8088/ddtalkxx/repair/repairkj.jsp',//可建城报修单12
'http://dk.broad.org:8088/ddtalkxx/gorder/gorder.jsp',//远大客餐单13
'http://dk.broad.org:8088/ddtalkxx/gorder/gorderkj.jsp',//可建客餐单14
'http://dk.broad.org:8088/ddtalkxx/tplane/tplane.jsp',//订票申请15
'http://dk.broad.org:8088/ddtalkxx/inroom/inroom.jsp',//入住申请16
'http://dk.broad.org:8088/ddtalkxx/artmake/artmake.jsp',//美术设计制作17
'http://dk.broad.org:8088/ddtalkxx/copter/copter.jsp',//直升机申请18
'http://ding.broad.org:88/positive/#/positive/',//转正申请19
'http://dk.broad.org:801/plan/#/ddAuth/visit/main',//客人通行预约20
'http://ding.broad.org:88/health/#/meet/',//年会论坛报名21
'http://dk.broad.org:8088/ddtalkxx/goout/queryqjyq.do',//疫情处理22
'http://ding.broad.org:88/gift/#/',//礼品管理23
'http://ding.broad.org:88/health/#/',//低碳出行24
'http://ding.broad.org:8100/summary/#/',//工作总结25
'http://ding.broad.org:88/selfGrade/#/',//员工评级26
'http://dk.broad.org:801/inspect/inspectHistory/',//远大城考察27
'http://ding.broad.org:88/invoice/#/',//空气发票28
'http://ding.broad.org:88/xflx/#/',//代销产品立项申请29
'http://ding.broad.org:88/registration/#/',//电脑台账30
'http://dk.broad.org:801/plan/#/ddAuth/meet/main',//约见总裁31
'http://ding.broad.org:88/fileyl/#/wjylsy',//文件制度32
'http://dk.broad.org:801/plan/#/ddAuth/yous/main',//钉钉领料33
'http://ding.broad.org:88/custom/#/MyList/',//拷图34
'http://ding.broad.org:88/weekPlan/#/',//周计划35
];
import dpgz from '../assets/workPlan1.jpg';
import gzzj from '../assets/zj.jpg';
import zjh from '../assets/ydyyzy_bt_43.jpg';
import ygpj from '../assets/pj.jpg';
import kqxc from '../assets/ydyyzy_bt_5.jpg';
import wcsq from '../assets/ydyyzy_bt_3.jpg';
import qjd from '../assets/ydyyzy_bt_4.jpg';
import ccd from '../assets/ydyyzy_bt_2.jpg';

import yqcl from '../assets/ydyyzy_bt_32.jpg';
import mpsq from '../assets/ydyyzy_bt_9.jpg';
import jbts from '../assets/ydyyzy_bt_6.jpg';
import zcxx from '../assets/ydyyzy_bt_21.jpg';
import dpsq from '../assets/ydyyzy_bt_18.jpg';
import rzsq from '../assets/ydyyzy_bt_19.jpg';
import zsqsq from '../assets/ydyyzy_bt_16.jpg';
import zzsq from '../assets/ydyyzy_bt_23.jpg';
import lpgl from '../assets/c.png';
import dtcx from '../assets/ydyyzy_bt_28.jpg';
import kqfp from '../assets/ydyyzy_bt_33.jpg';
import dltz from '../assets/ydyyzy_bt_36.jpg';
import yjzc from '../assets/ydyyzy_bt_371.jpg';
import wjzd from '../assets/ydyyzy_bt_38.jpg';
import ddll from '../assets/ydyyzy_bt_35.jpg';

import hkwyx from '../assets/ydyyzy_bt_7.jpg';
import txgj from '../assets/ydyyzy_bt_8.jpg';
import ydbx from '../assets/ydyyzy_bt_10.jpg';
import kjbx from '../assets/wx.jpg';
import ydct from '../assets/ydyyzy_bt_11.jpg';
import kect from '../assets/ct.jpg';
import keyy from '../assets/ydyyzy_bt_29.jpg';
import lhlt from '../assets/ydyyzy_bt_26.jpg';
import ydkc from '../assets/ydyyzy_bt_22.jpg';
import mssj from '../assets/ydyyzy_bt_17.jpg';
import dxlx from '../assets/ydyyzy_bt_34.jpg';
import kt from '../assets/ydyyzy_bt_41.jpg';
let itemObject = [
    {
        title:'待批工作',
        url:`http://dk.broad.org:8088/ddtalkxx/oamessage/query.do?userid={userid}`,
        img:dpgz,
        id:1,
        count:0,
    },
    {
        title:'工作总结',
        url:`http://ding.broad.org:8100/summary/#/{jobnumber}`,
        img:gzzj,
        id:25,
        count:0,
    },
    {
        title:'周计划',
        url:`http://ding.broad.org:88/weekPlan/#/{jobnumber}`,
        img:zjh,
        id:35,
        count:0,
    },
    {
        title:'员工评级',
        url:`http://ding.broad.org:88/selfGrade/#/{jobnumber}`,
        img:ygpj,
        id:26,
        count:0,
    },
    {
        title:'考勤异常',
        url:`http://dk.broad.org:8088/ddtalkxx/feedback/query.do?xm={name}&dkxh={jobnumber}`,
        img:kqxc,
        id:2,
        count:0,
    },
    {
        title:'外出申请',
        url:'http://dk.broad.org:8088/ddtalkxx/goout/querywc.do?xm={name}&dkxh={jobnumber}',
        img:wcsq,
        id:3,
        count:0,
    },
    {
        title:'请假单',
        url:'http://dk.broad.org:8088/ddtalkxx/goout/queryqj.do?xm={name}&dkxh={jobnumber}',
        img:qjd,
        id:4,
        count:0,
    },
    {
        title:'出差单',
        url:'http://dk.broad.org:8088/ddtalkxx/goout/querycc.do?xm={name}&dkxh={jobnumber}',
        img:ccd,
        id:5,
        count:0,
    },
    {
        title:'疫情处理',
        url:'http://dk.broad.org:8088/ddtalkxx/goout/queryqjyq.do?xm={name}&dkxh={jobnumber}',
        img:yqcl,
        id:22,
        count:0,
    },
    {
        title:'名片申请',
        url:'http://dk.broad.org:8088/ddtalkxx/applybcard/bcardapply.jsp?userid={userid}',
        img:mpsq,
        id:10,
        count:0,
    },
    {
        title:'举报投诉',
        url:'http://dk.broad.org:8088/ddtalkxx/complaint/complaint.jsp?userid={userid}',
        img:jbts,
        id:7,
        count:0,
    },
    {
        title:'总裁信箱',
        url:'http://dk.broad.org:8088/ddtalkxx/ceomail/ceomail.jsp?userid={userid}',
        img:zcxx,
        id:8,
        count:0,
    },
    {
        title:'订票申请',
        url:'http://dk.broad.org:8088/ddtalkxx/tplane/tplane.jsp?userid={userid}',
        img:dpsq,
        id:15,
        count:0,
    },
    {
        title:'入住申请',
        url:'http://dk.broad.org:8088/ddtalkxx/inroom/inroom.jsp?userid={userid}',
        img:rzsq,
        id:16,
        count:0,
    },
    {
        title:'直升机申请',
        url:'http://dk.broad.org:8088/ddtalkxx/copter/copter.jsp?userid={userid}',
        img:zsqsq,
        id:18,
        count:0,
    },
    {
        title:'转正申请',
        url:'http://ding.broad.org:88/positive/#/positive/{jobnumber}',
        img:zzsq,
        id:19,
        count:0,
    },
    {
        title:'礼品管理',
        url:'http://ding.broad.org:88/gift/#/{jobnumber}',
        img: lpgl,
        id:23,
        count:0,
    },
    {
        title:'低碳出行',
        url:'http://ding.broad.org:88/health/#/{jobnumber}',
        img:dtcx,
        id:24,
        count:0,
    },
    {
        title:'空气发票',
        url:'http://ding.broad.org:88/invoice/#/{jobnumber}',
        img:kqfp,
        id:28,
        count:0,
    },
    {
        title:'电脑台帐',
        url:'http://ding.broad.org:88/registration/#/{jobnumber}',
        img:dltz,
        id:30,
        count:0,
    },
    {
        title:'约见总裁',
        url:'http://dk.broad.org:801/plan/#/ddAuth/meet/main',
        img:yjzc,
        id:31,
        count:0,
    },
    {
        title:'文件制度',
        url:'http://ding.broad.org:88/fileyl/#/wjylsy',
        img:wjzd,
        id:32,
        count:0,
    },
    {
        title:'钉钉领料',
        url:'http://dk.broad.org:801/plan/#/ddAuth/yous/main',
        img:ddll,
        id:33,
        count:0,
    },
    {
        title:'互联网邮箱',
        url:'http://dk.broad.org:801/plan/#/ddAuth/oth/mail/addMail',
        img:hkwyx,
        id:6,
        count:0,
    },
    {
        title:'通信工具申请',
        url:'http://dk.broad.org:8088/ddtalkxx/applyuntool/untoolapply.jsp?userid={userid}',
        img:txgj,
        id:9,
        count:0,
    },
    {
        title:'远大城报修单',
        url:'http://dk.broad.org:8088/ddtalkxx/repair/repair.jsp?userid={userid}',
        img:ydbx,
        id:11,
        count:0,
    },
    {
        title:'可建城报修单',
        url:'http://dk.broad.org:8088/ddtalkxx/repair/repairkj.jsp?userid={userid}',
        img:kjbx,
        id:12,
        count:0,
    },
    {
        title:'远大客餐单',
        url:'http://dk.broad.org:8088/ddtalkxx/gorder/gorder.jsp?userid={userid}',
        img:ydct,
        id:13,
        count:0,
    },
    {
        title:'可建客餐单',
        url:'http://dk.broad.org:8088/ddtalkxx/gorder/gorderkj.jsp?userid={userid}',
        img:kect,
        id:14,
        count:0,
    },
    {
        title:'客人通行预约',
        url:'http://dk.broad.org:801/plan/#/ddAuth/visit/main',
        img:keyy,
        id:20,
        count:0,
    },
    {
        title:'年会论坛报名',
        url:'http://ding.broad.org:88/health/#/meet/{jobnumber}',
        img:lhlt,
        id:21,
        count:0,
    },
    {
        title:'远大城考察',
        url:'http://dk.broad.org:801/inspect/inspectHistory/{jobnumber}',
        img:ydkc,
        id:27,
        count:0,
    },
    {
        title:'美术设计制作',
        url:'http://dk.broad.org:8088/ddtalkxx/artmake/artmake.jsp?userid={userid}',
        img:mssj,
        id:17,
        count:0,
    },
    {
        title:'代销产品立项申请',
        url:'http://ding.broad.org:88/xflx/#/{jobnumber}',
        img:dxlx,
        id:29,
        count:0,
    },
    {
        title:'拷图',
        url:'http://ding.broad.org:88/custom/#/MyList/{jobnumber}',
        img:kt,
        id:34,
        count:0,
    },

];
export {link,itemObject}
