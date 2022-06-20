
<template>
  <section class="depositeWrap container">
    <img class="bg" :src="DATA.bgImage || ''" alt="" />
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
              <span>{{ (item.typeName) }}</span>
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
  console.log("dff", item);
  router.push({
    path: "/SecondaryPage/Details",
    query: {
      id: item.typeId,
    },
  });
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

</style>