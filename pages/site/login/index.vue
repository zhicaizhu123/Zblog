<template>
  <section class="login-container">
    <div class="login-main">
      <h2 class="color-primary">
        ZCoder
      </h2>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="账号">
          <el-input
            v-model="form.name"
            placeholder="请输入账号名"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入登录密码"
          />
        </el-form-item>
      </el-form>
      <div class="login-footer">
        <el-button @click="navTo">
          首页
        </el-button>
        <el-button
          type="primary"
          @click="onSubmit('form')"
        >
          登录
        </el-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blank',
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: '请输入账号', trigger: 'change' }],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'change' }
        ]
      }
    }
  },

  mounted () {
    this.$store.commit('user/removeToken')
    this.$store.commit('user/removeUserInfo')
  },

  methods: {
    navTo () {
      this.$router.replace('/')
    },

    onSubmit (formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false
        }
        const [, res] = await this.$to(
          this.$axios.$post('/api/users/login', this.form)
        )
        if (res) {
          this.$store.commit('user/saveToken', { token: res.data.token })
          const [err, data] = await this.$to(
            this.$axios.$get('/api/users/me/info')
          )
          if (!err) {
            this.$store.commit('user/saveUserInfo', data.data)
            this.$router.replace('/')
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  h2 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .login-main {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  .login-footer {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
