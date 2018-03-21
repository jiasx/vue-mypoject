<template>
  <header>
    <el-row  style="width: 100%;-moz-box-shadow: 0px 1px 8px #888888;box-shadow: 0px 1px 8px #888888;">
        <el-col :span="8">
          <div class="logo">

            <span class="vm">DataFoundry</span>
          </div>
        </el-col>

    </el-row>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.header{
  .name{font-size:20px;color:#f00;}
}
</style>
