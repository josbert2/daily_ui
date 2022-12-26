export const AlignContent = (fullConfigTW) => {
    
    var dataPush = []
    var prefix = ["content-start", "content-end", "content-center", "content-between", "content-around", "content-evenly"]
    
    for (var i = 0; i < prefix.length; i++) {
        dataPush.push(prefix[i])
    }
    
    return dataPush
    
}