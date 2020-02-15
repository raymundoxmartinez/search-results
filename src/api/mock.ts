import axios from 'axios'


const instance = axios.create({
    baseURL: 'www.test.com'
})

export default instance