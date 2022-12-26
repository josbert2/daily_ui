export const JustifyItems = (fullConfigTW) => {
    
    var dataPush = []
    var prefix = ["justify-items-start", "justify-items-end", "justify-items-center", "justify-items-stretch"]
    
    for (var i = 0; i < prefix.length; i++) {
        dataPush.push(prefix[i])
    }
    
    return dataPush
    
}