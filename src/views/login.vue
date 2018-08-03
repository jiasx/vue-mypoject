<template>
  <!-- 登录页面 -->
  <div id="login">
    <div class="loginL">
        <img src="./../assets/img/login_logo.png" class="login_logo" alt="">
        <p class="login_tit">铸数工坊</p>
        <p class="login_detail">极速铸造云端应用&nbsp;&nbsp;探究大数据应用之美</p>
    </div>
    <div class="loginR">
        <div class="modal_form">
            <form class="form_block">
                <div class="modal_block">
                  <p class="modal_msg">
                    <span class="login_name login_set">用户名</span>
                  </p>
                  <div class="input_set">
                    <input name="username" class="form-control" autocomplete="off" required>
                  </div>
                </div>

                <div class="modal_block">
                  <p class="modal_msg">
                    <span class="login_pass login_set">密码</span>
                  </p>
                  <div class="input_set">
                    <input name="username" class="form-control" autocomplete="off" required>
                  </div>
                </div>

                <p class="trans_background green_btn login_btn">登录</p>
            </form>
        </div>
    </div>
   
  </div>
</template>

<style lang="less">
@import "./../style/reset.less";
@import "./../style/login.less";
</style>

