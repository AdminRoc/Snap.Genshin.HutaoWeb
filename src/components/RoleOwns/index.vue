<template>
  <div>
    <el-table :data="mingzuo">
      <el-table-column align="center" label="角色">
        <template #default="{ row }">
          <div class="mingzuo">
            <el-avatar style="border-radius: 5px;margin-bottom: 5px;" shape="square" :size="80" :src="row.url">
            </el-avatar>
            {{row.name}}
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="holdingRate" label="持有"></el-table-column>
      <el-table-column align="center" prop="id0" label="0命"></el-table-column>
      <el-table-column align="center" prop="id1" label="1命"></el-table-column>
      <el-table-column align="center" prop="id2" label="2命"></el-table-column>
      <el-table-column align="center" prop="id3" label="3命"></el-table-column>
      <el-table-column align="center" prop="id4" label="4命"></el-table-column>
      <el-table-column align="center" prop="id5" label="5命"></el-table-column>
      <el-table-column align="center" prop="id6" label="6命"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import juesedata from "@/utils/item2.js";
  import mingzuo from "@/utils/item3.js";
  export default {
    name: "RoleOwns",
    data() {
      return {
        mingzuo: mingzuo,
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
        this.mingzuo.forEach((item, index) => {
          const key = item.avatar;
          let userItem = map.get(key);
          item.name = userItem.name;
          item.url = userItem.url;
          item.holdingRate = (item.holdingRate * 100).toFixed(3) + "%";
          item.rate.forEach((item2, index2) => {
            item["id" + item2.id] = (item2.value * 100).toFixed(3) + "%";
          });
        })
      },
    },
  };
</script>

<style lang="scss" scoped>
  .mingzuo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
</style>
