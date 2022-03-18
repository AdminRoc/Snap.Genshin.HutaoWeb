<template>
  <div>
    <div class="nav-bar-container">
      <el-row :gutter="15">
        <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="left-panel">
            <i :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" :title="collapse ? '展开' : '收起'"
              class="fold-unfold" @click="handleCollapse"></i>
            <breadcrumb class="hidden-xs-only" />
          </div>
        </el-col>
        <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="right-panel">
            <error-log></error-log>
<!--            <div class="iconfont icon-conversation active" title="会话列表" @click="liaotian">
              <sup class="unread" v-if="totalUnreadCount !== 0">
                <template v-if="totalUnreadCount > 99">99+</template>
                <template v-else>{{totalUnreadCount}}</template>
              </sup>
            </div> -->
            <full-screen-bar @refresh="refreshRoute"></full-screen-bar>
            <theme-bar class="hidden-xs-only"></theme-bar>
            <vab-icon title="重载所有路由" :pulse="pulse" :icon="['fas', 'redo']" @click="refreshRoute"></vab-icon>
            <avatar></avatar>
            <!-- <vab-icon
              title="退出系统"
              :icon="['fas', 'sign-out-alt']"
              @click="logout"
            /> -->
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <chatWindow ref="chatPop"></chatWindow> -->
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  // import tim from '@/tim'
  // import chatWindow from "@/components/chat/index"
  // import { genTestUserSig } from "@/utils/timUserSig.js"
  //import { userSig } from "@/api/im/index"
  import { Avatar, Breadcrumb, ErrorLog, FullScreenBar, ThemeBar, } from "@/layouts/components";

  export default {
    name: "NavBar",
    components: {
      Avatar,
      Breadcrumb,
      ErrorLog,
      FullScreenBar,
      ThemeBar
      //chatWindow
    },
    data() {
      return {
        pulse: false,
        userSigKey: ''
      };
    },
    computed: {
      ...mapGetters({
        collapse: "settings/collapse",
        visitedRoutes: "tabsBar/visitedRoutes",
        device: "settings/device",
        routes: "routes/routes",
        totalUnreadCount: "totalUnreadCount"
      }),
    },
    async created() {
      //await this.getUserSig()
      //await this.login()
    },
    mounted() {},
    methods: {
      ...mapActions({
        changeCollapse: "settings/changeCollapse",
      }),
      handleCollapse() {
        this.changeCollapse();
      },
      async refreshRoute() {
        this.$baseEventBus.$emit("reload-routerview");
        this.pulse = true;
        setTimeout(() => {
          this.pulse = false;
        }, 1000);
      },
      // liaotian() {
      //   this.$refs["chatPop"].show()
      // },
      // 获取 IM 秘钥
      async getUserSig() {
        const { data } = await userSig({ userId: this.$store.state.user.doctId });
        this.userSigKey = data.userSig
      },
      login() {
        this.loading = true
        this.tim.login({
            userID: this.$store.state.user.doctId,
            userSig: this.userSigKey
          })
          .then(() => {
            this.loading = false
            this.$store.commit('toggleIsLogin', true)
            this.$store.commit('startComputeCurrent')
            this.$store.commit('showMessage', {
              type: 'success',
              message: '登录成功'
            })
            this.$store.commit({
              type: 'GET_USER_INFO',
              userID: this.$store.state.user.userId,
              userSig: this.userSigKey,
              sdkAppID: genTestUserSig('').SDKAppID
            })
            this.$store.commit('showMessage', {
              type: 'success',
              message: '登录成功'
            })
          })
          .catch(error => {
            this.loading = false
            this.$store.commit('showMessage', {
              message: '登录失败：' + error.message,
              type: 'error'
            })
          })
      },
    },
  };
</script>

<style lang="scss" scoped>
  .iconfont {
    height: 70px;
    margin-right: 20px;
    font-size: 30px;
    line-height: 70px;
    color: #a5b5c1;
    text-align: center;
    cursor: pointer;
    -moz-user-select: none;
    user-select: none;
  }

  .iconfont:hover {
    color: white;
  }

  .active {
    color: #ffffff;

    &::after {
      position: absolute;
      top: 0;
      z-index: 0;
      display: block;
      height: 70px;
      content: ' ';
    }
  }

  .unread {
    position: absolute;
    top: 15px;
    right: 193px;
    z-index: 999;
    display: inline-block;
    height: 18px;
    padding: 0 6px;
    font-size: 12px;
    line-height: 18px;
    color: #FFF;
    text-align: center;
    white-space: nowrap;
    background-color: #f35f5f;
    border-radius: 10px;
  }

  .nav-bar-container {
    position: relative;
    height: $base-nav-bar-height;
    padding-right: $base-padding;
    padding-left: $base-padding;
    overflow: hidden;
    user-select: none;
    background: $base-color-white;
    background-color: #4880FF;
    box-shadow: $base-box-shadow;

    .left-panel {
      display: flex;
      align-items: center;
      justify-items: center;
      height: $base-nav-bar-height;

      .fold-unfold {
        font-size: 20px;
        color: $base-color-white;
        cursor: pointer;
      }

      ::v-deep {
        .breadcrumb-container {
          margin-left: 10px;
          color: $base-color-white;
        }
      }
    }

    .right-panel {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-bar-height;

      ::v-deep {
        svg {
          width: 1em;
          height: 1em;
          margin-right: 15px;
          font-size: $base-font-size-big;
          color: $base-color-white;
          cursor: pointer;
          fill: $base-color-white;
        }

        button {
          svg {
            margin-right: 0;
            color: $base-color-white;
            cursor: pointer;
            fill: $base-color-white;
          }
        }

        .el-badge {
          margin-right: 15px;
        }
      }
    }
  }
</style>
