<template>
  <div class="app-page">
    <div class="app-header">
      <Header/>
    </div>
    <div class="app-main">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header/index'
export default {
  components: {
    Header
  },

  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },

  mounted () {
    this.getUserInfo()
  },

  methods: {
    async getUserInfo () {
      const token = localStorage.getItem('token')
      if (token && (!this.userInfo || !this.userInfo._id)) {
        this.$store.commit('user/saveToken', { token })
        const [err, res] = await this.$to(
          this.$axios.$get('/api/users/me/info')
        )
        if (!err) {
          this.$store.commit('user/saveUserInfo', res.data)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.app-page {
  padding-top: 50px;
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  }
  .app-main {
    max-width: 1100px;
    margin: 10px auto;
  }
}
</style>
