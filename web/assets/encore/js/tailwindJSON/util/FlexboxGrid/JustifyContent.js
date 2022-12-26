export const JustifyContent = (fullConfigTW) => {
    
    var dataPush = []
    var prefix = ["justify-start", "justify-end", "justify-center", "justify-between", "justify-around", "justify-evenly"]
    
    for (var i = 0; i < prefix.length; i++) {
        dataPush.push(prefix[i])
    }
    
    return dataPush
    
}