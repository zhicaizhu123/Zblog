<template>
  <ul class="right-list prevent-default">
    <li
      v-for="(item, index) in navList"
      :key="index"
    >
      <nuxt-link :to="item.url">
        {{ item.label }}
      </nuxt-link>
    </li>
    <li v-if="userInfo._id">
      <el-dropdown>
        <a
          href="javascript: void(0)"
          class="el-dropdown-link"
        >
          {{ userInfo.name }}<i class="el-icon-arrow-down el-icon--right"/>
        </a>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, index) in personList"
            :key="index"
          >
            <nuxt-link :to="item.url">
              {{ item.label }}
            </nuxt-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </li>
    <li v-else>
      <nuxt-link to="/site/login">
        登录
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      navList: [
        {
          label: '首页',
          url: '/'
        },
        {
          label: '文章',
          url: '/article'
        },
        {
          label: '记录',
          url: '/life'
        }
      ],
      personList: [
        {
          label: '我的文章',
          url: '/personal/article'
        },
        {
          label: '新建文章',
          url: '/article/create'
        },
        {
          label: '我的记录',
          url: '/personal/life'
        },
        {
          label: '新建记录',
          url: '/life/create'
        },
        {
          label: '退出登录',
          url: '/site/login'
        }
      ]
    }
  },

  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },

  methods: {}
}
</script>

<style lang="scss">
.right-list {
  display: flex;
  align-items: center;
  .el-dropdown-link {
    font-size: 16px;
  }
  li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
