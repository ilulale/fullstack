import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>{
    return axios.get(baseUrl)
}

const create = phoneObject => {
    return axios.post(baseUrl,phoneObject)
}

const delrio = delid =>{
    return axios.delete(`${baseUrl}/${delid}`)
}

export default{
    getAll,
    delrio,
    create
}