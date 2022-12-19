export const WhiteSpace = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "whitespace"
    var prefixPositionSpace = fullConfigTW.theme.whiteSpace
    for (var i = 0; i < prefixPositionSpace.length; i++) {
        dataPush.push(prefix + "-" + prefixPositionSpace[i])
    }

    return dataPush

}