import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useList = defineStore('list', () => ({
  state: () => ({
    list: [],
  }),
  getters: {
    getList: (state) => state.list,
  },
  actions: {
    async fetchList() {
      try {
        const response = await axios.get('http://localhost/api/')
        this.list = response.data
      } catch (error) {
        console.error('Error fetching list:', error)
      }
    },
  },
}))

