import axios from 'axios'

const getMusicHomeCarousel = (): Promise<object> => axios.get('https://music.niubishanshan.top/api/v2/music/recommend')

const getMusicToplist = (): Promise<void> => axios.get('https://music.niubishanshan.top/api/v2/music/toplist')

export {
  getMusicHomeCarousel,
  getMusicToplist
}