import axios from './axios'
import { Message } from 'element-ui'
console.log(this)
export default (url = '', data = {}, type = 'GET') => {
  type = type.toUpperCase()
  return new Promise((resolve, reject) => {
    if (type === 'POST') {
      axios.post(url, data).then(response => {
        resolve(response.data)
      }, err => {
        Message.error(err)
        reject(err)
      })
    } else {
      axios.get(url).then(response => {
        resolve(response.data)
      }, err => {
        Message.error(err)
        reject(err)
      })
    }
  })
}
