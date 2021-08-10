const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   chainWebpack:config=>{
       config.optimization.minimize(true);
       config.optimization.splitChunks({chunks:'all'})
   },
   configureWebpack: config => {
    config.plugins.forEach((val) => {
        if (val instanceof HtmlWebpackPlugin) {
            val.options.title = '远大集团'
            }
        })    
    },

      //全局变量
      css: {
        requireModuleExtension: true,//该属性
        loaderOptions: {
          postcss: {
            plugins: [
              autoprefixer(),
              pxtoviewport({
                unitToConvert: "px",  // 需要转换的单位，默认为"px"
                viewportWidth: 750, //  设计稿的视口宽度
                unitPrecision: 5, // 单位转换后保留的精度
                propList: ["*"], // 能转化为vw的属性列表
                viewportUnit: "vw", //  希望使用的视口单位
                fontViewportUnit: "vw", // 字体使用的视口单位
                selectorBlackList: [], // 需要忽略的CSS选择器
                minPixelValue: 1, // 最小的转换数值，如果为1的话，只有大于1的值会被转换
                mediaQuery: false, // 媒体查询里的单位是否需要转换单位
                replace: true, // 是否直接更换属性值，而不添加备用属性
                exclude: /node_modules/, // 忽略某些文件夹下的文件或特定文件
                include: undefined,  // 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 ‘src/mobile‘ 下的文件 (include: /\/src\/mobile\//)
                landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
                landscapeUnit: "vw", // 横屏时使用的单位
               // landscapeWidth: 568 // 横屏时使用的视口宽度
              })
            ]
          }
          
        }
      },
      devServer: {
        host: "192.9.214.35",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        
        // 配置多个代理
        proxy: {
        "/api": {
        target: "http://dk.broad.org:8088/broad", // 要访问的接口域名
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
        "^/api": "" //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
               }
            }
           }
       }
  }