module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard' //代码检查书写太严格，关闭处理
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "indent": ["off", 2],  //严格的检查缩进问题，不必报错，关闭这个检查规则
     //使用eslint时，严格模式下，报错Missing space before function parentheses的问题，意思是在方法名和刮号之间需要有一格空格。
    'space-before-function-paren': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "prettier/prettier": "off" //关闭prettier
  }
}
