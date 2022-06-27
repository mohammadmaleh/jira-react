import Axios, { AxiosInstance } from 'axios'

const createInstance = (): AxiosInstance => {
  const axiosConfig = {
    baseURL: 'http://127.0.0.1:5000/v1/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  const context = new (Axios as any)(axiosConfig)
  let instance = Axios.prototype.request.bind(context)
  instance = Object.assign(instance, Axios.prototype, context)
  return instance as unknown as AxiosInstance
}

const axios = createInstance()

export default axios
