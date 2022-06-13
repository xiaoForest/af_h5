
<template>
  <Loading
    v-show="onoffLoading"
    class="animate__animated"
    :class="loadingChange ? '' : 'animate__slideOutLeft'"
    ref="sonRef"
    :change="onoffLoading"
  />
  <section
    class="homeWrap container animate__animated"
    :class="loadingChange ? '' : 'animate__slideInRight'"
  >
    <img class="bg" :src="getSrc('home_0.jpg')" alt="" />
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
            v-for="(item, index) in list"
            :key="index"
            @click="goToSecondary(item)"
          >
            <div>
              <span>{{ item.name }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="
          happyBox
          animate__animated animate__zoomInRight animate__delay-05s
        "
      >
        <img class="feel_happy" :src="getSrc('feel_happy.png')" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import Loading from "@/components/loading.vue";
import getSrc from "@/utils/getSrc.js";
import { Toast } from "vant";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const sonRef = ref();
const loadingChange = ref(true);
const onoffLoading = ref(true);
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
  if (item.name == "缴存") {
    router.push({
      path: "/deposite/deposite",
      query: {
        id: item.id,
      },
    });
  }
};

onMounted(() => {
  console.log(route.query.two);
  if (route.query.two) {
    onoffLoading.value = false;
    return false;
  }
  if (!onoffLoading) {
    loadingChange.value = false;
    return false;
  } else {
    watch(() => {
      loadingChange.value = sonRef.value.onoff;
    });
  }
});
</script>

<style lang="scss">
.homeWrap {
  .main {
    .home_title {
      width: 430px;
      height: 131px;
    }
    .happyBox {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>