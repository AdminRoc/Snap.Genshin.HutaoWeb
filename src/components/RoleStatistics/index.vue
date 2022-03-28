<template>
  <div class="floor-list">
    <el-tabs v-model="floorValue" @tab-click="floorClick">
      <el-tab-pane v-for="item in chuchangdata" :key="item.floor" :label="'第'+item.floor+'层'" :name="item.floor+'s'">
        <el-row :gutter="10">
          <el-col :xs="22" :sm="11" :md="7" :lg="6" :xl="4" v-for="floorItem in item.avatarUsage" :key="floorItem.id">
            <el-card>
              <div class="box-card-a">
                <div class="box-card-c">
                  <el-avatar style="border-radius: 5px;" shape="square" :size="80" :src="floorItem.url">
                  </el-avatar>
                  <div class="item-child-left">{{floorItem.name}}</div>
                </div>
                <div class="item-child-right">
                  {{floorItem.value}}
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import chuchangdata from "@/utils/item1.js";
  import juesedata from "@/utils/item2.js";
  export default {
    name: "RoleStatistics",
    data() {
      return {
        floorValue: 9 + 's',
        chuchangdata: chuchangdata,
        juesedata: juesedata,
      };
    },
    created() {
      this.mergeData();
    },
    mounted() {},
    methods: {
      floorClick() {

      },
      mergeData() {
        let map = new Map();
        this.juesedata.forEach((item, index) => {
          map.set(item.id, item)
        });
        this.chuchangdata.forEach((item, index) => {
          item.avatarUsage.forEach((item2, index2) => {
            const key = item2.id;
            let userItem = map.get(key);
            item2.name = userItem.name;
            item2.url = userItem.url;
            item2.value = (item2.value * 100).toFixed(3) + "%";
          })
        })
      },
    },
  };
</script>

<style lang="scss" scoped>
  .floor-list {
    width: 100%;

    .box-card-a {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }

    .box-card-c {
      display: flex;
      align-items: center;
    }

    .item-child-left {
      margin-left: 20px;
      font-size: 1.2em;
    }

    .item-child-right {
      font-size: 1.2em;
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
  ::v-deep .el-avatar > img{
    background-color: #FFFFFF;
  }
</style>
