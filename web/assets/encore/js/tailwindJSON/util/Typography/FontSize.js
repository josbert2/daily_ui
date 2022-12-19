export const FontSize = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "text"
    for (const [key, value] of Object.entries(fullConfigTW.theme.fontSize)) {
        dataPush.push(prefix + '-' + key)
    }


    return dataPush

}