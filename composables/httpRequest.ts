import axios, { AxiosResponse } from 'axios';

type Suc = (res: AxiosResponse<any, any>) => void
type Err = (err: any) => void

export const sendPost = (path: string, data: {}, param: {}, success: Suc | null , error: Err | null ) => {
    const runtimeConfig = useRuntimeConfig()
    var headers = {
        'API-KEY': runtimeConfig.apiKey,
        Authorization : ''
    }
    if(process.client){
        // headers.Authorization = `Bearer ${getCookie('token')}`
        const token = sessionStorage.getItem("Token");
        headers.Authorization = `Bearer ${token}`;
    }
    axios({
        method: 'post',
        baseURL: runtimeConfig.public.baseApi,
        headers : headers,
        url: path,
        data: data,
        params: param,
    }).then((response)=>{
        if (success != null){
            success(response)
        } 
    }).catch((err)=>{
        if (error != null){
            error(err)
        } 
    })
}

export const sendGet = (path: string, data: {}, param: {}, success: Suc | null , error: Err | null ) => {
    const runtimeConfig = useRuntimeConfig()
    var headers = {
        'API-KEY': runtimeConfig.public.apiKey,
        Authorization : ''
    }
    if(process.client){
        // headers.Authorization = `Bearer ${getCookie('token')}`
        const token = sessionStorage.getItem("Token");
        headers.Authorization = `Bearer ${token}`;
    }
    axios({
        method: 'get',
        baseURL: runtimeConfig.public.baseApi,
        url: path,
        data: data,
        headers : headers,
        params: param,
    }).then((response)=>{
        if (success != null){
            success(response)
        } 
    }).catch((err)=>{
        if (error != null){
            error(err)
        } 
    })
}

export const sendPut = (path: string, data: {}, param: {}, success: Suc | null , error: Err | null ) => {
    const runtimeConfig = useRuntimeConfig()
    var headers = {
        'API-KEY': runtimeConfig.public.apiKey,
        Authorization : ''
    }
console.log(11)

    if(process.client){
        // const token = sessionStorage.getItem("Token");
        // headers.Authorization = `Bearer ${getCookie('token')}`
        // headers.Authorization = `Bearer ${token}`
        const token = sessionStorage.getItem("Token");
        headers.Authorization = `Bearer ${token}`;
    }
    axios({
        method: 'put',
        baseURL: runtimeConfig.public.baseApi,
        url: path,
        data: data,
        headers : headers,
        params: param,
    }).then((response)=>{
        if (success != null){
            success(response)
        } 
    }).catch((err)=>{
        if (error != null){
            error(err)
        } 
    })
}

export const getCookie = (name: string) => {
    
    if(process.client){ 
        const value = `; ${document.cookie}`;
        var parts = value.split(`; ${name}=`); 
        if (parts.length == 2) {
            
            return parts.pop()!.split(";").shift();
        }
        else{ 
            
            return null
        } 
    }
    else {
        console.log('server   '+ document.cookie )
        return null
    }
}

export const sendDelete = (path: string, data: {}, param: {}, success: Suc | null , error: Err | null ) => {
    const runtimeConfig = useRuntimeConfig()
    var headers = {
        'API-KEY': runtimeConfig.apiKey,
        Authorization : ''
    }
    if(process.client){
        headers.Authorization = `Bearer ${getCookie('token')}`
    }
    axios({
        method: 'delete',
        baseURL: runtimeConfig.public.baseApi,
        headers : headers,
        url: path,
        data: data,
        params: param,
    }).then((response)=>{
        if (success != null){
            success(response)
        } 
    }).catch((err)=>{
        if (error != null){
            error(err)
        } 
    })
}




export const setCookie = (name: string, val: string) => {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
}

export const deleteCookie = (name: string) => {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}

export const getPageId = (path: string) => {
    const allPath = [
        { id: 1, path:'/runcardInfo'},
        { id: 1, path:'/runcardInfo/detail'},
        { id: 2, path:'/runtaskTrack'},
        { id: 3, path:'/newRuncard'},
        { id: 4, path:'/bomList'},
        { id: 5, path:'/InvList'},
        { id: 6, path:'/warehouseStorage'},
        { id: 7, path:'/storage'},
        { id: 8, path:'/partList'},
        { id: 9, path:'/partTypeList'}, 
        { id: 10, path: '/measureGroupMangt'}, 
        { id: 11, path: '/operationList'}, 
        { id: 12, path: '/routingMangt'}, 
        { id: 13, path: '/processList'},
        { id: 14, path: '/ngReason'},
        { id: 15, path: '/scrapReason'}, 
        { id: 16, path: '/machine/machineList'}, 
        { id: 17, path: '/machine/machineGroup'},
        { id: 18, path: '/machine/machineRepairReason'},
        { id: 19, path: '/logs/erpRuntask'},
        { id: 20, path: '/user/userList'},
        { id: 21, path: '/department'},
        { id: 22, path: '/cardMangt'},
        { id: 23, path: '/permission'},
        { id: 24, path: '/userWorkList'}
    ]
    const find = allPath.find(item => item.path == path) 
    if(find != null){
        return find.id
    }else {
        return -1
    }
}
 