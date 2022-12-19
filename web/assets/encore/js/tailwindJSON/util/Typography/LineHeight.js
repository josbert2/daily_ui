export const LineHeight = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "leading"
    for (const [key, value] of Object.entries(fullConfigTW.theme.lineHeight)) {
        dataPush.push(prefix + '-' + key)
    }

    return dataPush

}