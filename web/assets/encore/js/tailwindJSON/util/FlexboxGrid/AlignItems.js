export const AlignItems = (fullConfigTW) => {
    
    var dataPush = []
    var prefix = ["items-start", "items-end", "items-center", "items-baseline", "items-stretch"]
    
    for (var i = 0; i < prefix.length; i++) {
        dataPush.push(prefix[i])
    }
    
    return dataPush
    
}