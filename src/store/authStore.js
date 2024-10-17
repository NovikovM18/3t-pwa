import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    isLogin: JSON.parse(localStorage.getItem('isLogin')) || false, // Default to false if not set
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null // Default to null if not set
  }),

  getters: {
    isAuthenticated: (state) => !!state.isLogin, // Getter to check if user is logged in
    getCurrentUser: (state) => state.currentUser // Getter to retrieve the current user
  },

  actions: {
    login(data) {
      try {
        this.isLogin = true
        this.currentUser = data
        localStorage.setItem('isLogin', JSON.stringify(true)) // Set `isLogin` as a stringified boolean
        localStorage.setItem('currentUser', JSON.stringify(data)) // Ensure proper serialization of user data
      } catch (error) {
        console.error('Error during login:', error) // Basic error handling
      }
    },
    logout() {
      try {
        this.isLogin = false
        this.currentUser = null
        localStorage.setItem('isLogin', JSON.stringify(false)) // Consistent data type
        localStorage.setItem('currentUser', null) // Properly clear user data
      } catch (error) {
        console.error('Error during logout:', error)
      }
    },
    loadAuthState() {
      // Helper to load state from localStorage when app initializes
      this.isLogin = JSON.parse(localStorage.getItem('isLogin')) || false
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null
    }
  }
})
