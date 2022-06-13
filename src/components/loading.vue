<template>
  <div class="LoadingWrap">
    <div class="progressBox">
      <div class="Progress">
        <div class="bar"></div>
        <img :style="{ left: num + '%' }" :src="getSrc('loading.png')" alt="" />
        <div :style="{ width: num + '%' }" class="cover"></div>
      </div>
      <p>{{ num }}%</p>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, defineProps, ref } from "vue";
import getSrc from "@/utils/getSrc.js";
import { loadImageEnd } from "@/utils/loadImageEnd.js";
const props = defineProps({
  change: {
    type: Boolean,
    default: true,
  },
});

const isLoading = ref(true);
const defaultNum = ref(1);
const num = ref(0);
const onoff = ref(true);

const clickHandle = (p) => {
  if (!props.change == true) {
    onoff.value = false;
    return false;
  } else {
    let imgArr = [getSrc("logo.png")];
    loadImageEnd(imgArr, (i) => {
      let ld = setInterval(() => {
        num.value += defaultNum.value;
        if (num.value >= 100) {
          clearInterval(ld);
          onoff.value = false;
          setTimeout(() => {
            isLoading.value = false;
          }, 100);
        }
      }, Math.random() * 30 + 20);
    });
  }
};
clickHandle();

defineExpose({
  onoff,
});
</script>

<style lang="scss" scoped>
.LoadingWrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0, #d8fcf7, #a9f3ff);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  .progressBox {
    .Progress {
      position: relative;
      .bar {
        width: 440px;
        height: 26px;
        border-radius: 20px;
        border: 10px #fff solid;
        background: #fff;
        overflow: hidden;
        z-index: 2;
      }
      .cover {
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        left: 0;
        height: 100%;
        background: repeating-linear-gradient(
          -45deg,
          #fff,
          #fff 10px,
          #3eb9ff 0,
          #3eb9ff 20px
        );
        width: 440px;
        height: 26px;
        border-radius: 20px;
        border: 10px #fff solid;
        transition: all 0.1s ease;
        z-index: 3;
      }
      img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 119px;
        height: 118px;
        margin-left: -60px;
        transition: all 0.1s ease;
        z-index: 4;
      }
    }
    p {
      margin-top: 20px;
      color: #fff;
      font-size: 24px;
    }
  }
}
</style>
