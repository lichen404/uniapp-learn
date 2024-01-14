<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import CustomNavbar from '../../components/CustomNavbar.vue'
import { getHomeBanner, getHomeCategory, getHomeHot } from '../../services/home';
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue';


const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])

// 获取轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBanner()
  bannerList.value = res.result
}

// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategory()
  categoryList.value = res.result

}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHot()
  hotList.value = res.result
}


onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <CustomNavbar />
  <scroll-view scroll-y class="scroll-view">
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
