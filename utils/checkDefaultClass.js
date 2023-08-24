export const checkDefaultClass = (str, defaultClass) => {
    if (str === false) return ''
    if (str === String) return str.includes('$reset') ? str.replace('$reset', '') : `${defaultClass} ${str}`
    return defaultClass
}