export const TextIndent = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "indent"
    var prefixPositionSpace = fullConfigTW.theme.spacing

    for (var i = 0; i < prefixPositionSpace.length; i++) {
        dataPush.push(prefix + "-" + prefixPositionSpace[i])
    }

    return dataPush
    

}