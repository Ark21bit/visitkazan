export const filterMap = (list, filter, map) => {
    let Array = []
    for (let i = 0; i < toValue(list)?.length; i++) {
        if (filter(toValue(list)[i])) Array.push(map(toValue(list)[i]))
    }
    return Array
}