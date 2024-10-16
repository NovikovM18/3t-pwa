import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state() {
    return {
      isLogin: localStorage.getItem('isLogin'),
      currentUser: JSON.parse(localStorage.getItem('currentUser'))
    }
  },

  getters: {},

  actions: {
    login(data) {
      localStorage.setItem('isLogin', true)
      localStorage.setItem('currentUser', JSON.stringify(data))
    },
    logout() {
      localStorage.setItem('isLogin', false)
      localStorage.setItem('currentUser', null)
    }
  }
})