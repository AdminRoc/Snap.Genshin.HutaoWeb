<template>
  <el-dropdown @command="handleCommand">
    <span class="avatar-dropdown">
      <!--<el-avatar class="user-avatar" :src="avatar"></el-avatar>-->
      <!-- <img class="user-avatar" v-if="avatar!=null":src="avatar" alt="" /> -->
      <img class="user-avatar"  src="~@/assets/avatar.png" alt="" />
      <div class="user-name">
        {{ username }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="userinformation" divided>
        <vab-icon :icon="['fas', 'user']"></vab-icon>
        用户信息
      </el-dropdown-item>
      <el-dropdown-item command="changepassword" divided>
        <vab-icon :icon="['fas', 'pen']"></vab-icon>
        修改密码
      </el-dropdown-item>
      <el-dropdown-item command="logout" divided>
        <vab-icon :icon="['fas', 'sign-out-alt']"></vab-icon>
        退出登录
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  import {
    recordRoute
  } from "@/config/settings";

  export default {
    name: "Avatar",
    computed: {
      ...mapGetters({
        avatar: "user/avatar",
        username: "user/username",
      }),
    },
    methods: {
      handleCommand(command) {
        switch (command) {
          case "userinformation":
            this.$router.push("/personalCenter/personalCenter");
            break;
          case "changepassword":
            this.$router.push("/personalCenter/updatePass");
            break;
          case "logout":
            this.logout();
            break;
        }
      },
      logout() {
        this.$baseConfirm(
          "您确定要退出" + this.$baseTitle + "吗?",
          null,
          async () => {
            await this.$store.dispatch('logout') // 结束会话
            await this.$store.dispatch("user/logout");
            if (recordRoute) {
              const fullPath = this.$route.fullPath;
              this.$router.push(`/login?redirect=${fullPath}`);
            } else {
              this.$router.push("/login");
            }
          }
        );
      },
    },
  };
</script>
<style lang="scss" scoped>
  .avatar-dropdown {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 50px;
    padding: 0;

    .user-avatar {
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 50%;
    }

    .user-name {
      position: relative;
      margin-left: 5px;
      margin-left: 5px;
      font-weight: 600;
      cursor: pointer;
      color: #FFFFFF;
    }
  }
</style>
