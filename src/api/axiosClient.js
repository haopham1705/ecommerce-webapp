import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://api.ezfrontend.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const { config, status, data } = error.response

    const URLS_REQUEST = ['/auth/local/register', '/auth/local']

    if (URLS_REQUEST.includes(config.url) && status === 400) {
      const errorList = data.data || []
      const firstError = errorList.length > 0 ? errorList[0] : {}
      const messageList = firstError.messages || []
      const firstMessage = messageList.length > 0 ? messageList[0] : {}
      throw new Error(firstMessage.message)
    }
    console.log(error.response)
    return Promise.reject(error)
  }
)

export default axiosClient
