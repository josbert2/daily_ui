export const ListStyleType = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "list"
    for (const [key, value] of Object.entries(fullConfigTW.theme.listStyleType)) {
        dataPush.push(prefix + '-' + key)
    }

    return dataPush

}