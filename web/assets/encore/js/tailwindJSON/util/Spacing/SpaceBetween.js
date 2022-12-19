export const SpaceBetween = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "space-x-"
    var data = fullConfigTW.theme.spacing
    for (var key in data) {
        dataPush.push(prefix + key)
    }
    prefix = "space-y-"
    for (var key in data) {
        dataPush.push(prefix + key)
    }

    return dataPush

}