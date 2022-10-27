// API统一管理
import requests from './request'

export const requestCategoryList = () =>
  requests({ method: 'get', url: '/product/getBaseCategoryList' })
