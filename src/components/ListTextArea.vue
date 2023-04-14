<template>
  <div class="list-wrapper">
    <div class="title">
      {{ title }}
    </div>
    <div class="list">
      <ul>
        <li class="text" v-for="(i, idx) in infoList" :key="idx">{{ i }}</li>
      </ul>
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
    areaInfoList: { type: Array, default: () => [] },
  },
  data() {
    return {
      title: this.areaTitle,
      infoList: [...this.areaInfoList],
    };
  },
  mounted() {
    console.info("ListTextArea mounted");
  },
});
</script>
