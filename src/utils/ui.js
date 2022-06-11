export function uiRequireRule(message) {
    return value => !!value || (message ? message : 'Required.')
}

export function uiRequireLength(message, length) {
    return value => value.length < length || (message ? message : 'Max ' + length + ' characers')
}

export function showMessage(component, message) {
    component.$root.$emit('showMessage', message)
}