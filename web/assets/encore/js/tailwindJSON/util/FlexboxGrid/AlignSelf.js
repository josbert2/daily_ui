export const AlignSelf = (fullConfigTW) => {
    
    var dataPush = []
    var prefix = ["self-auto", "self-start", "self-end", "self-center", "self-stretch"]
    
    for (var i = 0; i < prefix.length; i++) {
        dataPush.push(prefix[i])
    }
    
    return dataPush
    
}