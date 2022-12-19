export const TextUnderlineOffset = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "underline-offset"
    var prefixPosition = ['auto', '0', '2', '4', '8']

    for (var i = 0; i < prefixPosition.length; i++) {
        dataPush.push(prefix + "-" + prefixPosition[i])
    }

    return dataPush
    

}