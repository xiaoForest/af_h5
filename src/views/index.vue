
<template>
  <Loading ref="sonRef" />
  <section
    class="homeWrap container animate__animated"
    :class="loadingChange ? '' : 'animate__slideInRight'"
  >
    <img
      class="bg animate__animated"
      :class="!DATA.bgImage ? 'hide' : 'animate__fadeIn'"
      :src="DATA.bgImage"
      alt=""
    />
    <div class="main">
      <div
        class="logoBox animate__animated animate__fadeInUp animate__delay-05s"
      >
        <img class="logo" :src="getSrc('logo.png')" alt="" />
      </div>
      <div
        class="middleBox animate__animated animate__fadeInUp animate__delay-05s"
      >
        <img class="home_title" :src="getSrc('home_title.png')" />
        <ul class="buttonList">
          <li
            v-for="(item, index) in DATA.pageData"
            :key="index"
            @click="goToSecondary(item, item.typeName)"
          >
            <div>
              <span>{{ item.typeName }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="
          happyBox
          animate__animated animate__bounceInRight animate__delay-05s
        "
      >
        <img class="feel_happy" :src="getSrc('feel_happy.png')" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive, ref, onMounted, watchEffect } from "vue";
import Loading from "@/components/loading.vue";
import getSrc from "@/utils/getSrc.js";
import { getIndexPage } from "@/api/api.js";
import { Toast } from "vant";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const sonRef = ref();
const loadingChange = ref(true);

const DATA = ref([]);
const list = ref([
  {
    id: "1",
    name: "缴存",
  },
  {
    id: "2",
    name: "提取",
  },
  {
    id: "3",
    name: "贷款",
  },
  {
    id: "4",
    name: "灵活就业人员专区",
  },
  {
    id: "5",
    name: "网点地址查询",
  },
]);

const goToSecondary = (item) => {
  // sceneType 场景类型 IndexPage首页  SecondPage次级首页  InfoPage信息页

  if (item.sceneType == "SecondPage") {
    router.push({
      path: "/secondaryPage/secondaryPage",
      query: {
        id: item.typeId,
      },
    });
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

onMounted(async () => {
  let a = localStorage["localJsonIndex"];

  await getIndexPage()
    .then(({ data }) => {
      DATA.value = data.data;
      localStorage["localJsonIndex"] = JSON.stringify(data.data);
    })
    .catch((err) => {
      console.log("失败了" + err);
    });

  DATA.value = JSON.parse(a);
});
</script>

<style lang="scss">
.homeWrap {
  .main {
    .home_title {
      margin-top: 120px;
      width: 430px;
      height: 131px;
    }
    .happyBox {
      margin-top: 90px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>