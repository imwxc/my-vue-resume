<template>
    <div>
        <div v-if="area.type == 'list'" class="listArea">
          <ListTextArea :areaTitle="area.areaTitle" :areaInfoList="getAreaInfoList(area)" />
        </div>
        <div v-if="area.type == 'custom'" class="customArea">
          <CustomTextArea :areaTitle="area.areaTitle" :areaInfo="getAreaInfo(area)" />
        </div>
    </div>
  </template>
  
  <style scoped></style>
  <script lang="ts">
  import ModuleTitle from "./ModuleTitle.vue";
  import CustomTextArea from "./CustomTextArea.vue";
  import ListTextArea from "./ListTextArea.vue";
  import SubModuleBlockTitle from "./SubModuleBlockTitle.vue";
  import { defineComponent } from "vue";
  import type { ModuleConfig, infoArea } from "@/interface";
  export default defineComponent({
    // 启用了类型推导
    props: {
      area : {type: Object, default: ():infoArea=>({
        type: '',
        areaInfo: '',
        areaInfoList: [],
        blockTitle: ''
      })}
    },
    data() {
      return {
        config: { 
          ...this.moduleConfig
        } as ModuleConfig
      };
    },
    methods:{
      getAreaInfoList(area:infoArea){
        return area.type == 'list' ? area.areaInfoList :[]
      },
      getAreaInfo(area: infoArea){
        return area.type == 'custom' ? area.areaInfo : ''
      }
    },
    mounted() {},
  });
  </script>
  