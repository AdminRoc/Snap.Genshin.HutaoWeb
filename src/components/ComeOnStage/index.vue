<template>
  <div class="floor-list">
    <el-tabs v-model="floorValue" @tab-click="floorClick">
      <el-tab-pane v-for="item in shangchang" :key="item.floor" :label="item.floor" :name="item.floor">
        <el-row :gutter="10">
          <el-col :xs="22" :sm="11" :md="7" :lg="6" :xl="4" v-for="floorItem in item.teams" :key="floorItem.id">
            <el-card>
              <div class="box-card-a">
                <div class="box-card-c">
                  <el-avatar style="border-radius: 5px;" shape="square" :size="80" :src="floorItem.upurl1">
                  </el-avatar>
                  <el-avatar style="border-radius: 5px;" shape="square" :size="80" :src="floorItem.upurl2">
                  </el-avatar>
                  <el-avatar style="border-radius: 5px;" shape="square" :size="80" :src="floorItem.upurl3">
                  </el-avatar>
                  <el-avatar style="border-radius: 5px;" shape="square" :size="80" :src="floorItem.upurl4">
                  </el-avatar>
                </div>
                <div class="box-card-c">
                  <el-avatar style="border-radius: 5px;" shape="square" :size="80" :src="floorItem.downurl1">
                  </el-avatar>
                  <el-avatar style="border-radius: 5px;" shape="square" :size="80" :src="floorItem.downurl2">
                  </el-avatar>
                  <el-avatar style="border-radius: 5px;" shape="square" :size="80" :src="floorItem.downurl3">
                  </el-avatar>
                  <el-avatar style="border-radius: 5px;" shape="square" :size="80" :src="floorItem.downurl4">
                  </el-avatar>
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
  import shangchang from "@/utils/item9.js";
  import juesedata from "@/utils/item2.js";
  export default {
    name: "ComeOnStage",
    data() {
      return {
        floorValue: "9层1间",
        shangchang: shangchang,
        juesedata: juesedata,
      };
    },
    created() {
      //this.mergeData();
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
        this.shangchang.forEach((item, index) => {
          item.floor = item.level.floor + "层" + item.level.index + "间"
          item.teams.forEach((item2, index2) => {
            const upkeys = item2.id.upHalf.split(",");
            const downkeys = item2.id.downHalf.split(",");
            let userItem1 = map.get(Number.parseInt(upkeys[0]));
            let userItem2 = map.get(Number.parseInt(upkeys[1]));
            let userItem3 = map.get(Number.parseInt(upkeys[2]));
            let userItem4 = map.get(Number.parseInt(upkeys[3]));
            let userItem5 = map.get(Number.parseInt(downkeys[0]));
            let userItem6 = map.get(Number.parseInt(downkeys[1]));
            let userItem7 = map.get(Number.parseInt(downkeys[2]));
            let userItem8 = map.get(Number.parseInt(downkeys[3]));
            if (userItem1) {
              item2.upname1 = userItem1.name;
              item2.upurl1 = userItem1.url;
            }
            if (userItem2) {
              item2.upname2 = userItem2.name;
              item2.upurl2 = userItem2.url;
            }
            if (userItem3) {
              item2.upname3 = userItem3.name;
              item2.upurl3 = userItem3.url;
            }
            if (userItem4) {
              item2.upname4 = userItem4.name;
              item2.upurl4 = userItem4.url;
            }

            if (userItem5) {
              item2.downname1 = userItem5.name;
              item2.downurl1 = userItem5.url;
            }
            if (userItem6) {
              item2.downname2 = userItem6.name;
              item2.downurl2 = userItem6.url;
            }
            if (userItem7) {
              item2.downname3 = userItem7.name;
              item2.downurl3 = userItem7.url;
            }
            if (userItem8) {
              item2.downname4 = userItem8.name;
              item2.downurl4 = userItem8.url;
            }
          })
        })
        console.log(this.shangchang)
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
      flex-direction:column;
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
</style>
