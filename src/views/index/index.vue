<template>
  <div class="container">
    <el-tabs class="child" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="角色出场" name="1">
        <roleStatistics></roleStatistics>
      </el-tab-pane>
      <el-tab-pane label="角色持有" name="2">
        <roleOwns></roleOwns>
      </el-tab-pane>
      <el-tab-pane label="角色搭配" name="3">
        <roleCollocation></roleCollocation>
      </el-tab-pane>
      <el-tab-pane label="武器搭配" name="4">
        <weaponAssignment></weaponAssignment>
      </el-tab-pane>
      <el-tab-pane label="圣遗物搭配" name="5">
        <relics></relics>
      </el-tab-pane>
      <!-- <el-tab-pane label="队伍出场" name="6">
       <comeOnStage></comeOnStage>
      </el-tab-pane> -->
    </el-tabs>

  </div>
</template>

<script>
  //角色出场
  import roleStatistics from "@/components/RoleStatistics/index"
  //角色名作
  import roleOwns from "@/components/RoleOwns/index"
  //角色分配
  import roleCollocation from "@/components/RoleCollocation/index"
  //武器分配
  import weaponAssignment from "@/components/WeaponAssignment/index"
  //圣遗物分配
  import relics from "@/components/Relics/index"
  //出场
  //import comeOnStage from "@/components/ComeOnStage/index"
  export default {
    name: "index",
    components: {
      roleStatistics,
      roleOwns,
      roleCollocation,
      weaponAssignment,
      relics,
      //comeOnStage
    },
    data() {
      return {
        loading: false,
        activeName: "1",

      };
    },
    created() {
      this.$store
        .dispatch("user/login")
        .then((res) => {
        })
    },
    mounted() {},
    methods: {
      handleClick() {

      },
      handleLogin() {
        this.$store
          .dispatch("user/login")
          .then((res) => {
            console.log(res)
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;

    .child {
      margin: 0 10px;
    }
  }
  ::v-deep .el-tabs__item {
    color: #8D8D8D;
    font-size: 1.2em;
  }

  ::v-deep .el-tabs__item.is-active {
    color: #000000;
  }

  ::v-deep .el-tabs__item.hover {
    color: #000000;
  }

  ::v-deep .el-card {
    border-radius: 8px;
  }
</style>
