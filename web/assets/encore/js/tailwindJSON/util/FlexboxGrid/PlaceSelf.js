export const PlaceSelf = (fullConfigTW) => {
    
    var dataPush = []
    var prefix = ["place-self-start", "place-self-end", "place-self-center", "place-self-stretch"]
    
    for (var i = 0; i < prefix.length; i++) {
        dataPush.push(prefix[i])
    }
    
    return dataPush
    
}