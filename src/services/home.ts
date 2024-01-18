import { PageResult,PageParams } from "@/types/global";
import { BannerItem, CategoryItem, GuessItem, HotItem } from "@/types/home";
import { http } from "@/utils/http";

export const getHomeBanner = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite,
    },
  });
};

export const getHomeCategory = () => {
  return http<CategoryItem[]>({
    method: "GET",
    url: "/home/category/mutli",
  });
};

/**
 * 首页-热门推荐-小程序
 */
export const getHomeHot = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuessLike = (data?:PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data
  })
}