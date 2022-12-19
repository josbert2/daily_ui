export const FontFamily = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "font"
    for (const [key, value] of Object.entries(fullConfigTW.theme.fontFamily)) {
        dataPush.push(prefix + '-' + key)
    }

    return dataPush

    
}