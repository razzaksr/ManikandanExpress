import axios from 'axios'

const url="http://localhost:8000/service"

export const greetings=async()=>{
    const get=await axios(`${url}/check`)
    alert(get.data)
    return get;
}