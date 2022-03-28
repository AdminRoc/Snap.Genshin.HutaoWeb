<template>
  <div>
    <el-table :data="shengyiwudapei" :show-header="false" :border="true">
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
            <el-col :xs="10" :sm="6" :md="4" :lg="3" :xl="3" v-for="wuqiItem in row.reliquaryUsage" :key="wuqiItem.id">
              <div class="peidui">
                <div style="display: flex;">
                  <el-avatar class="avatar-img" shape="square" :size="40" :src="wuqiItem.url">
                  </el-avatar>
                  <el-avatar v-if="wuqiItem.url2" style="margin-left:10px;" class="avatar-img" shape="square" :size="40" :src="wuqiItem.url2">
                  </el-avatar>
                </div>
                <div style="font-weight: 400;">{{wuqiItem.name}}</div>
                <div v-if="wuqiItem.name2" style="font-weight: 400;">{{wuqiItem.name2}}</div>
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
  import shengyiwu from "@/utils/item7.js";
  import shengyiwudapei from "@/utils/item8.js";
  export default {
    name: "Relics",
    data() {
      return {
        shengyiwu: shengyiwu,
        shengyiwudapei: shengyiwudapei,
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
        this.shengyiwu.forEach((item, index) => {
          map2.set(item.id, item)
        });
        this.shengyiwudapei.forEach((item, index) => {
          const key = item.avatar;
          let userItem = map.get(key);
          item.name = userItem.name;
          item.url = userItem.url;
          item.reliquaryUsage.forEach((item2, index2) => {
            const key2 = item2.id;
            let keyarr=item2.id.split(";")
            if(keyarr.length==1){
              let ids = keyarr[0].split("-");
              let iditem = ids[0];
              let shengyiwuItem = map2.get(Number.parseInt(iditem));
              item2.name = ids[1]+"×"+shengyiwuItem.name;
              item2.url = shengyiwuItem.url;
              item2.url2 ="";
              item2.value = (item2.value * 100).toFixed(3) + "%";
            }
            if(keyarr.length==2){
              let ids = keyarr[0].split("-");
              let ids2 = keyarr[1].split("-");
              let iditem = ids[0];
              let iditem2 = ids2[0];
              let shengyiwuItem = map2.get(Number.parseInt(iditem));
              let shengyiwuItem2 = map2.get(Number.parseInt(iditem2));
              item2.name = ids[1]+"×"+shengyiwuItem.name;
              item2.name2 = ids2[1]+"×"+shengyiwuItem2.name;
              item2.url = shengyiwuItem.url;
              item2.url2 =shengyiwuItem2.url;
              item2.value = (item2.value * 100).toFixed(3) + "%";
            }
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
    justify-content: flex-start;
    align-items: center;
    height: 120px;
    font-weight: 600;
    margin-top: 10px;
    font-size: 14px;
  }

  .avatar-img {
    border-radius: 5px;
    margin-bottom: 5px;
  }
  ::v-deep .el-avatar > img{
    background-color: #FFFFFF;
  }
</style>
