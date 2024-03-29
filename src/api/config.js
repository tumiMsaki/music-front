import axios from 'axios'

export const baseUrl = 'http://localhost:4000'

const axiosInstance = axios.create({
  baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    throw err
  }
)

export {
  axiosInstance
}

