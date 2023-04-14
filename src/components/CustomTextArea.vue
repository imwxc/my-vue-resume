<template>
  <div class="list-wrapper">
    <div class="title">
      {{ title }}
    </div>
    <div class="text">
      {{ info }}
    </div>
  </div>
</template>

<style scoped></style>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // 启用了类型推导
  props: {
    areaTitle: { type: String, default: "" },
    areaInfo: { type: String, default: "" },
  },
  data() {
    return {
      title: this.areaTitle,
      info: this.areaInfo
    };
  },
  mounted() {
    console.info("CustomTextArea mounted");
  },
});
</script>
