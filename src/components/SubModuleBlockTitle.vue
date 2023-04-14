
<template>
    <div class="block-title-wrapper">
        <div class="block-title">
          <div class="time">{{ title.time }}</div>
          <div class="info"> {{ title.company || title.project }} </div>
          <div class="sub-info">{{ title.role }}</div>
        </div>
    </div>
  </template>
  
  <style scoped>
  
  </style>
<script lang="ts">
import type { Title, ModuleConfig } from '../interface'
import { defineComponent } from 'vue';
export default defineComponent({
  // 启用了类型推导
  props: {
    blockTitle:{type: Object, default:():ModuleConfig['blockTitle']=>({})}
  },
  data() {
    return {
        title: {
            ...this.blockTitle,
        } as Title
    }
  },
  mounted() {
  },
})
</script>
  