<template>
    <div class="page-container">
        <BaseInfo/>
        <div v-for="(module , idx) in moduleList" :key="idx" class="module">

        </div>
    </div>
</template>

<style scoped></style>
<script lang="ts">
import BaseInfo from '../components/BaseInfo.vue';
import ModuleTitle from '../components/ModuleTitle.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  // 启用了类型推导
  props: {
  },
  data() {
    return {
      title: '',
      moduleList: []
    }
  },
  mounted() {
  }
})
</script>
