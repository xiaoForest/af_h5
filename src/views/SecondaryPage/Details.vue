
<template>
  <section class="depositeWrap container">
    <img class="bg" :src="getSrc('deposite_details.jpg')" alt="" />
    <GuideFloat :pathName="'/secondaryPage/secondaryPage'" />
    <div class="main">
      <div class="logoBox">
        <img class="logo" :src="getSrc('logo_white.png')" alt="" />
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
.depositeWrap {
}
</style>