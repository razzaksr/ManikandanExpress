import axios from 'axios'

const url="http://localhost:8000/service"

export const greetings=async()=>{
    const get=await axios.get(`${url}/check`)
    //alert(get.data)
    return get;
}

export const every=async(id)=>{
    id=id||''
    const all=await axios.get(`${url}/${id}`)
    //alert(all.data[0].fullname+" @ api");
    return all;
}

export const adding=async(object)=>{
    const state=await axios.post(`${url}/`,object)
    return state;
}

export const up=async(object)=>{
    const state=await axios.put(`${url}/`,object)
    return state;
}

export const del=async(id)=>{
    const info=await axios.delete(`${url}/${id}`)
    return info;
}

