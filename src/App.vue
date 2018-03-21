<template id="app">
    <el-container class="con_main">
      <el-header style="padding:0px;">
        <v-header></v-header>
      </el-header>
      <el-container>
        <el-main  style="padding:0px;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import $ from 'jquery'
import VHeader from "./components/header"
import VLeft from "./components/left";
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){

  },
  components:{
    VHeader,
    VLeft
   
  }  
}

</script>
<style lang="less">
  @import "style/common.less";
</style>



