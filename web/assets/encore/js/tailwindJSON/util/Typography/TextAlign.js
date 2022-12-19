export const TextAlign = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "text"
    for (const [key, value] of Object.entries(fullConfigTW.theme.textAlign)) {
        dataPush.push(prefix + '-' + key)
    }

    return dataPush

}