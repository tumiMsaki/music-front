import axios from 'axios'

export const baseUrl = ''

const axiosInstance = axios.create({
  baseURL: baseUrl
})

axiosInstance.interceptors.request.use(
  res => res.data,
  err => {
    throw err
  }
)

export {
  axiosInstance
}

