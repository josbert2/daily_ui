export const LetterSpacing = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "tracking"
    for (const [key, value] of Object.entries(fullConfigTW.theme.letterSpacing)) {
        dataPush.push(prefix + '-' + key)
    }

    return dataPush

}