import axios from "axios";

const url1='https://api.sampleapis.com/beers/ale';

export const getUsers = async()=>{
    console.log("data1")
    return await axios.get(`${url1}`)
}