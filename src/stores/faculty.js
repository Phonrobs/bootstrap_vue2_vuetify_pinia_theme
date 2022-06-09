import { defineStore } from 'pinia'
import http from '../services/http'

export const useFacultyStore = defineStore('faculty', {
    state: () => ({
        faculties: []
    }),
    actions: {
        async getFaculties() {
            return await http.get('faculties')
        }
    }
})