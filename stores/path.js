
import { defineStore } from 'pinia'

// TODO when logout clear this
export const usePathStore = defineStore('path', {
  state: () => ({
    items: [],  
  }),
  actions: {
    setData(data) {
      this.items = data
    },  
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'path',
        storage: process.client ? localStorage : null
      }
    ]
  }
})