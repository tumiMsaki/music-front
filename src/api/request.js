import { axiosInstance } from './config.js'

export const getBannerRequest = () => {
  return axiosInstance.get('/')
}

export const getRecommendRequest = () => {
  return axiosInstance.get('/personalized')
}