
<template>
    <div class="sub-module-wrapper">
        <SubModuleBlockTitle />
        <div v-for="( area, idx ) in areaInfoList" :key="idx">
            
        </div>
    </div>
  </template>
  
  <style scoped>
  
  </style>
<script lang="ts">
import type { Title, ModuleConfig } from '../interface'
import { defineComponent } from 'vue';
import SubModuleBlockTitle from './SubModuleBlockTitle.vue'
export default defineComponent({
  // 启用了类型推导
  props: {
    blockTitle:{type: Object, default:():ModuleConfig['blockTitle']=>({})}
  },
  data() {
    return {
        title: {
            ...this.blockTitle,
        } as Title,
        areaInfoList: []
    }
  },
  mounted() {
  },
})
</script>
  