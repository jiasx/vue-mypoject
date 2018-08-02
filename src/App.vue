<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/********重置**********/
#app {
  
}
/* 公共样式 */
html,body{-webkit-tap-highlight-color:rgba(0,0,0,0);color:#696969;font:12px "微软雅黑",Helvetica;margin:0;padding:0;width:100%;height:100%;}
form,table,td,h1,h2,h3,h4,ul,ol,li,p{margin:0;padding:0;border:0;list-style:none}
input,img{vertical-align:middle}
html,body{min-width:100%;height: 100%;}
body{-webkit-text-size-adjust:none;}
img{border:0 none;height:auto; max-width: 100%;}
ol,ul{list-style:none;}
:focus{outline:0;}
a{ color:inherit;}
textarea{resize:none;overflow:auto;}
a{-webkit-touch-callout:none;-webkit-user-select:none;text-decoration:none}
table{border-collapse: collapse;border-spacing: 0;}
input{ border:none;}
input:focus,textarea:focus{outline:0}
dd{ margin: 0;}
</style>