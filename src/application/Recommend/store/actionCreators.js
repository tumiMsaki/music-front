import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { getBannerRequest, getRecommendRequest } from '../../../api/request' 

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      dispatch(changeBannerList(data.banners))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendRequest().then(data => {
      dispatch(changeRecommendList(data.result))
    }).catch(err => {
      console.log(err)
    })
  }
}