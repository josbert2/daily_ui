export const FlexBasis = (fullConfigTW) => {

    var dataPush = []

    var prefix = "basis-"
    
    var data = fullConfigTW.flexBasis
    for (var key in data) {
        dataPush.push(prefix + key)
    }

    return dataPush

}