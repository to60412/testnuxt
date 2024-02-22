import { defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    //data
    state: () => ({
        count: 0
    }),
    //methods 
    actions: {
        increment(){
            this.count += 1
        },
        decrement(){
            this.count -= 1
        }
    },
    //computed 
    getters: {
        doubleCount: (state) => state.count * 2
    },
    persist:{
        enabled: true,
        strategies:[
            {
                key: 'counter',
                storage: process.client ? localStorage : null
            }
        ]
    }
})