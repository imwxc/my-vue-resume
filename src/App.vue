

<template>
  <header>
    <button> 跳转展示页 </button>
  </header>

  <main>
    <ShowPage/>
    <EditPage/>
  </main>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // 启用了类型推导
  props: {
  },
  data() {
    return {
      title: ''
    }
  },
  mounted() {
  }
})
</script>