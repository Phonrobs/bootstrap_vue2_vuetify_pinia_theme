function apiUrl(api) {
    return process.env.VUE_APP_SERVER + 'api/' + api
}

export default {
    async request(method, api, data, headers, responseType) {
        let hs = {}

        if (headers == null || typeof(headers["Content-Type"]) == "undefined" || headers["Content-Type"] == null) {
            hs["Content-Type"] = "application/json"
        }

        if (headers) {
            for (var key in headers) {
                hs[key] = headers[key]
            }
        }

        const response = await fetch(apiUrl(api), {
            method: method,
            headers: hs,
            credentials: "include",
            body: data ? JSON.stringify(data) : null
        })

        if (response.ok) {
            if (responseType == "blob") {
                return await response.blob()
            } else {
                const txt = await response.text()

                if (responseType == "text") {
                    return txt
                } else if (txt) {
                    return JSON.parse(txt)
                }
            }
        } else {
            if (response.status == 401) {
                // hooking point for signin redirect
            } else {
                const txt = await response.text()

                if (txt) {
                    if (responseType == "text") {
                        throw new Error(txt)
                    } else {
                        const err = JSON.parse(txt)

                        if (err.detail) {
                            throw new Error(err.detail)
                        } else if (err.title) {
                            throw new Error(err.title)
                        } else {
                            throw new Error(response.statusText + ' (' + response.status + ')')
                        }
                    }
                } else {
                    throw new Error('Server error!')
                }
            }
        }

        return null;
    },
    get: async function(url) {
        return await this.request("GET", url)
    },
    post: async function(url, data) {
        return await this.request("POST", url, data)
    },
    async download(url, method, data) {
        if (method == 'GET') {
            return await this.request("GET", url, null, null, "blob")
        } else {
            return await this.request(method, url, data, null, "blob")
        }
    },
    async put(url, data) {
        return await this.request("PUT", url, data)
    },
    async delete(url) {
        return await this.request("DELETE", url)
    }
}