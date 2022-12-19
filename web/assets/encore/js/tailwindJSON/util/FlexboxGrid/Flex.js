export const Flex = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "flex"
    var prefixPosition = ["-1", "-auto", "1", "auto", "initial", "none"]

    for (var i = 0; i < prefixPosition.length; i++) {
        dataPush.push(prefix + prefixPosition[i])
    }
    

    return dataPush

}