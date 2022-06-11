import { defineStore } from 'pinia'
import http from '../services/http'

export const useFacultyStore = defineStore('faculty', {
    state: () => ({
        faculties: []
    }),
    actions: {
        getFaculties() {
            return Promise((resolve, reject) => {
                if (this.faculties.length > 0) resolve(this.faculties)

                http.get('faculties').then((result) => {
                    this.faculties = result
                    resolve(this.faculties)
                }, reject)
            })
        }
    }
})