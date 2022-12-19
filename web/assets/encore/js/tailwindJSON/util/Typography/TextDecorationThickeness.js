export const TextDecorationThickeness = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "decoration"
    var prefixPosition = ['auto', 'from-font', '0', '2', '4', '8']

    for (var i = 0; i < prefixPosition.length; i++) {
        dataPush.push(prefix + "-" + prefixPosition[i])
    }

    return dataPush
    

}