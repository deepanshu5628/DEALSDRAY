
export  const apiconnector=async(method,url,bodydata,headers,params)=>{
   let res;
   try {
        res=await fetch(url,{
        method:method,
        headers : headers? headers :{"Content-Type":"application/json"},
        body:JSON.stringify(bodydata),
        params:params? params:null,
        
    })
    let data=await res.json();
    return data;
    
   } catch (error) {
    console.log(error.message);
   }
}


import axios from "axios";
 const axiosinstance= axios.create({});
export const  axiosapiconnector= (method,url,bodydata,headers,params)=>{
    return axiosinstance({
        method:`${method}`,
        url:`${url}`,
        data:bodydata?bodydata:null,
        headers:headers ?headers:{"Content-Type":"application/json"},
        params:params? params :null,
    })
}




























