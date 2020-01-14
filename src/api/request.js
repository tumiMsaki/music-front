import { axiosInstance } from './config.js'

export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

export const getRecommendRequest = () => {
  return axiosInstance.get('/personalized')
}