import { defineStore} from "pinia";

export const usePageShowStore = defineStore('pageShow', {
    //data
    state: () => ({
        hasAct: true,
        showData: true,
    }),
    //methods 
    actions: {
        setData(data){
            this.showData = data
        },
        setAct(data){
            this.hasAct = data
        },
        updateA(){
            this.showData = !this.showData
            console.log(" showData > "+this.showData)
        }
    },
    //computed 
    getters: {

    },
    //是否持久化
    // persist:{
    //     enabled: true,
    //     strategies:[
    //         {
    //             key: 'pageShow',
    //             storage: process.client ? localStorage : null
    //         }
    //     ]
    // }
})