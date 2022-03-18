<template>
  <div>
    <el-table :data="wuqidapei" :show-header="false" :border="true">
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
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3" v-for="wuqiItem in row.weapons" :key="wuqiItem.id">
              <div class="peidui">
                <el-avatar class="avatar-img" shape="square" :size="60" :src="wuqiItem.url">
                </el-avatar>
                <div style="font-weight: 400;">{{wuqiItem.name}}</div>
                <div style="font-weight: 400;">{{wuqiItem.value}}</div>
              </div>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import juesedata from "@/utils/item2.js";
  import wuqi from "@/utils/item5.js";
  import wuqidapei from "@/utils/item6.js";
  export default {
    name: "WeaponAssignment",
    data() {
      return {
        wuqi: wuqi,
        wuqidapei: wuqidapei,
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
        let map2 = new Map();
        this.wuqi.forEach((item, index) => {
          map2.set(item.id, item)
        });
        this.wuqidapei.forEach((item, index) => {
          const key = item.avatar;
          let userItem = map.get(key);
          item.name = userItem.name;
          item.url = userItem.url;
          item.weapons.forEach((item2, index2) => {
            const key2 = item2.id;
            let wuqiItem2 = map2.get(key2);
            item2.name = wuqiItem2.name;
            item2.url = wuqiItem2.url;
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
</style>
