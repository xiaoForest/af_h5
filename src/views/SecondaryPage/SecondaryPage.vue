
<template>
  <section class="depositeWrap container">
    <img
      class="bg animate__animated"
      :class="!DATA.bgImage ? 'hide' : 'animate__fadeIn'"
      :src="DATA.bgImage"
      alt=""
    />
    <GuideFloat :pathName="'/'" />
    <div class="main">
      <div class="logoBox">
        <img class="logo" :src="getSrc('logo_white.png')" alt="" />
      </div>
      <div class="middleBox">
        <ul class="buttonList">
          <li
            class="item"
            v-for="(item, index) in DATA.pageData"
            :key="index"
            @click="goToSecondary(item)"
          >
            <div>
              <span>{{ item.typeName }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div></div>
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
const list = ref([
  {
    id: "1",
    name: "我是个人缴存",
  },
  {
    id: "2",
    name: "我是单位缴存职工",
  },
]);

const goToSecondary = (item) => {
  // sceneType 场景类型 IndexPage首页  SecondPage次级首页  InfoPage信息页

  if (item.sceneType == "SecondPage") {
    secondaryPageJson(item.typeId);
    // router.push({
    //   path: "/secondaryPage/secondaryPage",
    //   query: {
    //     id: item.typeId,
    //   },
    // });
  }
  if (item.sceneType == "InfoPage") {
    router.push({
      path: "/SecondaryPage/Details",
      query: {
        id: item.typeId,
      },
    });
  }
};
const DATA = ref([]);
const secondaryPageJson = async (e) => {
  // let a = localStorage["localJsonInfo"];
  let data = {
    typeId: e || route.query.id,
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
};
onMounted(() => {
  secondaryPageJson();
});
</script>

<style lang="scss">
</style>