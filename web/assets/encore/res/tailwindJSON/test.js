export const test = (fullConfigTW, data) => {
    var dataPush = []
    Object.entries(fullConfigTW.theme.colors).forEach(([keys, value]) => {
        if (typeof value === 'string') {
            data.push('text-' + keys)
        }
        if (typeof value === 'object') {
            Object.entries(value).forEach(([key, value], index) => {
                data.push('text-' + keys + '-' +  key)
            })
        }
    })
    return dataPush
}