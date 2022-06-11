import Vue from 'vue'
import { toLocaleDateTimeString, toLocaleDateString } from "@/utils/format"

Vue.filter('dateTime', (value) => {
    return toLocaleDateTimeString(value)
})

Vue.filter('date', (value) => {
    return toLocaleDateString(value)
})

Vue.filter('bytes', (value, decimals) => {
    if (!value) return '0 Bytes'
    if (isNaN(parseFloat(value)) && !isFinite(value)) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(value) / Math.log(k))

    return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
})