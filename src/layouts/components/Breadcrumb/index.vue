<template>
  <!-- <el-breadcrumb class="breadcrumb-container" separator=">">
   <el-breadcrumb-item v-for="item in list" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb> -->
  <div style="color: #FFFFFF;font-weight: 1000;font-size: 18px;margin-left: 10px;">SG</div>
</template>

<script>
  export default {
    name: "Breadcrumb",
    data() {
      return {
        list: this.getBreadcrumb(),
      };
    },
    watch: {
      $route() {
        this.list = this.getBreadcrumb();
      },
    },
    methods: {
      getBreadcrumb() {
        return this.$route.matched.filter(
          (item) => item.name && item.meta.title
        );
      },
    },
  };
</script>
<style lang="scss" scoped>
  .breadcrumb-container {
    height: $base-nav-bar-height;
    //font-size: $base-font-size-default;
    font-size: 18px;
    line-height: $base-nav-bar-height;
    color: $base-color-white;

    ::v-deep {
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          color: $base-color-white;
          font-weight: 1000;
          a {
            display: flex;
            float: left;
            font-weight: normal;
            color: $base-color-white;
            i {
              margin-right: 3px;
			  padding-right:10px ;
              color: $base-color-white;
            }
          }
        }

        &:last-child {
          color: $base-color-white;
          .el-breadcrumb__inner {
            a {
              color: $base-color-white;
            }
          }
        }

      }
    }
  }
</style>
