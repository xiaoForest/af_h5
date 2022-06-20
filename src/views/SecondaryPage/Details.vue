
<template>
  <section class="depositeWrap container">
    <img
      :class="!DATA.bgImage ? 'hide' : 'animate__fadeIn'"
      class="bg animate__animated"
      :src="DATA.bgImage"
      alt=""
    />
    <GuideFloat :pathName="'/secondaryPage/secondaryPage'" />
    <div class="main">
      <div class="logoBox">
        <img class="logo" :src="getSrc('logo_white.png')" alt="" />
      </div>
      <div class="detailsWrap">
        <div class="title">{{ DATA.typeName }}</div>
        <div class="ul">
          <div class="li" v-for="(i, index) in DATA.subType" :key="index">
            <div class="text" v-for="(z, n) in i.subTitle" :key="n">
              <strong>{{ z.titleName }}</strong>
              <span v-html="z.titleInfo"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import GuideFloat from "@/components/guideFloat.vue";
import getSrc from "@/utils/getSrc.js";
import { Toast } from "vant";
import { getPageInfo } from "@/api/api.js";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const sonRef = ref();
const loadingChange = ref(true);
const list = ref();

const goToSecondary = (item) => {
  if (item.name == "缴存") {
    // router.push({
    //   path: "../deposite/index",
    //   query: {
    //     id: item.id,
    //   },
    // });
  }
};

const DATA = ref([]);
onMounted(async () => {
  // let a = localStorage["localJsonInfo"];
  let data = {
    typeId: route.query.id,
  };
  await getPageInfo(data)
    .then(({ data }) => {
      DATA.value = data.data;
      // localStorage["localJsonInfo"] = JSON.stringify(data.data);
    })
    .catch((err) => {
      console.log("失败了" + err);
    });

  // DATA.value = JSON.parse(a);
});
</script>

<style lang="scss">
.detailsWrap {
  height: 70%;
  width: 100%;
  text-align: left;
  .title {
    font-size: 30px;
    border-radius: 20px;
    color: #fff;
    background-color: #0f3793;
    display: inline-block;
    padding: 6px 20px;
  }
  .ul {
    padding: 20px;
    .li {
      img {
        max-width: 100% !important;
        height: auto !important;
      }
      .text {
        text-align: justify;
        font-size: 28px;
        line-height: 1.6;
        margin-bottom: 20px;
        font-weight: bold;
        strong {
          position: relative;
          margin-bottom: 10px;
          font-weight: bold;
          &:after {
            width: calc(100% - 1em);
            position: absolute;
            bottom: 0;
            left: 0;
            content: "";
            height: 10px;
            background: #53a2ff;
            border-radius: 10px;
            z-index: -1;
          }
        }
      }
    }
  }
}
</style>