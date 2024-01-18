<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import CustomNavbar from '../../components/CustomNavbar.vue'
import { getHomeBanner, getHomeCategory, getHomeHot } from '../../services/home';
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue';
import { XtxGuessInstance } from '@/components/components';
import PageSkeleton from './components/PageSkeleton.vue';


const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const guessRef = ref<XtxGuessInstance>()

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

const onScrollToLower = () => {
  guessRef.value?.getMore()
}

const isTriggered = ref(false)

const onRefresherRefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(), guessRef.value?.getMore()])

  isTriggered.value = false
}

const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <CustomNavbar />
  <scroll-view scroll-y class="scroll-view" @scrolltolower="onScrollToLower" refresher-enabled
    @refresherrefresh="onRefresherRefresh" :refresher-triggered="isTriggered">
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </template>

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
