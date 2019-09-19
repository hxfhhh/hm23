<template>
  <div class='login'>
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png">
      </div>
      <el-form :model='loginForm' :rules='loginRules' ref='myForm' style='margin-top:20px'>
  <el-form-item prop='mobile'>
    <el-input v-model='loginForm.mobile' placeholder=' 请输入手机号'></el-input>
  </el-form-item>

  <el-form-item prop='code'>
    <el-input v-model='loginForm.code' placeholder="请输入验证码" style="width:65%"></el-input>
    <el-button style="float:right">发送验证码</el-button>
  </el-form-item>

  <el-form-item prop='agree'>
    <el-checkbox v-model='loginForm.agree'>请必须选择霸王条款</el-checkbox>
  </el-form-item>

  <el-form-item >
    <el-button  @click='login' type='primary' style="width:100%"> 登录 </el-button>
  </el-form-item>
      </el-form>
       </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        agree: false
      },
      loginRules: {
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }],
        code: [{ required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码是六位数字' }],
        agree: [{ validator: function (rule, value, callBack) {
          // if (value) {
          //   callBack()
          // }else {
          //   callBack(new Error('您必须无条件同意霸王条款'))
          // }
          value ? callBack() : callBack(new Error('必须勾选'))
        } }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token)
            this.$router.push('./home')
          }).catch(() => {
            this.$message({
              type: 'warning',
              message: '您的手机号或者验证码错误'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login{background-image: url('../../assets/img/login_bg.jpg');
height:100vh;
background-size:cover;
display: flex;
justify-content: center;
align-items: center;
.login-card{width: 440px;height: 340px;}
.title{
  text-align: center;
  img{
    height: 45px;
  }
}}
</style>
