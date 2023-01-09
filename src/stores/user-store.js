import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    firstName: null,
    lastName: null,
    email: null
  }),
  getters: {
    getId: (state) => state.id,
    getFirstName: (state) => state.firstName,
    getLastName: (state) => state.lastName,
    getEmail: (state) => state.email
  },
  actions: {
    async getSanctumCookie () {
      try {
        await api.get('sanctum/csrf-cookie')
      } catch (error) {
        if (error) throw error
      }
    },
    async login (email, password) {
      try {
        await api.post('login', { email, password })
      } catch (error) {
        if (error) throw error
      }
    },
    async fetchUser () {
      try {
        return await api.get('api/user')
      } catch (error) {
        if (error) throw error
      }
    },
    setUser (payload) {
      if (payload.id) this.id = payload.id
      if (payload.firstName) this.firstName = payload.firstName
      if (payload.lastName) this.lastName = payload.lastName
      if (payload.email) this.email = payload.email
    },
    clearUser () {
      this.id = null
      this.firstName = null
      this.lastName = null
      this.email = null
    }
  }
})
