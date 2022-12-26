export const PlaceItems = (fullConfigTW) => {
    
    var dataPush = []
    var prefix = ["place-items-start", "place-items-end", "place-items-center", "place-items-stretch"]
    
    for (var i = 0; i < prefix.length; i++) {
        dataPush.push(prefix[i])
    }
    
    return dataPush
    
}