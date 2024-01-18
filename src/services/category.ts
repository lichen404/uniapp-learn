import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

// GET/category/top
/**
 * 分类列表-小程序
 */
export const getCategoryTop = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}