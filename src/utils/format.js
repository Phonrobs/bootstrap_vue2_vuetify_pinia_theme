const locals = {
    'th': 'th-TH',
    'en': 'en-EN'
}

function local() {
    return locals['th']
}

export function isDate(v) {
    return typeof v !== 'undefined' && typeof v.getFullYear === "function"
}

export function toLocaleDateTimeString(v) {
    const l = local()

    if (isDate(v)) {
        if (l === locals.en) {
            return v.toLocaleString([l], {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        } else {
            return v.toLocaleString([l], {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        }
    } else {
        const date = new Date(v)

        if (l === locals.en) {
            return date.toLocaleString([l], {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        } else {
            return date.toLocaleString([l], {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        }
    }
}

export function toLocaleDateString(v) {
    const l = local()

    if (isDate(v)) {
        if (l === locals.en) {
            return v.toLocaleString([l], {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
        } else {
            return v.toLocaleString([l], {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
        }
    } else {
        const date = new Date(v)

        if (l === locals.en) {
            return date.toLocaleString(l, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
        } else {
            return date.toLocaleString(l, {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
        }
    }
}