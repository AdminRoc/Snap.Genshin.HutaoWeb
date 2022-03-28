<template>
    <el-table :data="fenpei" :show-header="false" :border="true">
      <el-table-column align="center" width="140">
        <template #default="{ row }">
          <div class="peidui">
            <el-avatar class="avatar-img" shape="square" :size="80" :src="row.url">
            </el-avatar>
            {{row.name}}
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" min-width="200">
        <template #default="{ row }">
          <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3" v-for="userItem in row.collocations" :key="userItem.id">
              <div class="peidui">
                <el-avatar class="avatar-img" shape="square" :size="60" :src="userItem.url">
                </el-avatar>
                <div style="font-weight: 400;">{{userItem.name}}</div>
                <div style="font-weight: 400;">{{userItem.value}}</div>
              </div>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
  import juesedata from "@/utils/item2.js";
  import fenpei from "@/utils/item4.js";
  export default {
    name: "RoleCollocation",
    data() {
      return {
        fenpei: fenpei,
        juesedata: juesedata
      };
    },
    created() {
      this.mergeData();
    },
    mounted() {},
    methods: {
      mergeData() {
        let map = new Map();
        this.juesedata.forEach((item, index) => {
          map.set(item.id, item)
        });
        this.fenpei.forEach((item, index) => {
          const key = item.avater;
          let userItem = map.get(key);
          item.name = userItem.name;
          item.url = userItem.url;
          item.collocations.forEach((item2, index2) => {
            const key2 = item2.id;
            let userItem2 = map.get(key2);
            item2.name = userItem2.name;
            item2.url = userItem2.url;
            item2.value = (item2.value * 100).toFixed(3) + "%";
          });
        })
      },
    },
  };
</script>

<style lang="scss" scoped>
  .peidui {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 120px;
    font-weight: 600;
    margin-top: 10px;
  }

  .avatar-img {
    border-radius: 5px;
    margin-bottom: 5px;
  }
  ::v-deep .el-avatar > img{
    background-color: #FFFFFF;
  }
</style>
