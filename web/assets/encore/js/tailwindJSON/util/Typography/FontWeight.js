export const FontWeight = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "font"
    for (const [key, value] of Object.entries(fullConfigTW.theme.fontWeight)) {
        dataPush.push(prefix + '-' + key)
    }

    return dataPush

}