export const JustifySelf = (fullConfigTW) => {
    
    var dataPush = []
    var prefix = ["justify-self-start", "justify-self-end", "justify-self-center", "justify-self-stretch"]
    
    for (var i = 0; i < prefix.length; i++) {
        dataPush.push(prefix[i])
    }
    
    return dataPush
    
}