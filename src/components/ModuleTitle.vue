<template>
  <div class="title-wrapper">
    <div class="title">
      {{ title }}
    </div>
    <div class="title-line" />
  </div>
</template>

<style scoped></style>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // 启用了类型推导
  props: {
    moduleTitle: String
  },
  data() {
    return {
      title: this.moduleTitle,
    };
  },
  mounted() {
    console.info('ModuleTitle mounted')
  },
});
</script>
