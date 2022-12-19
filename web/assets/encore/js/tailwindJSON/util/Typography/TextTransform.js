export const TextTransform = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "uppercase"
    dataPush.push(prefix)
    prefix = "lowercase"
    dataPush.push(prefix)
    prefix = "capitalize"
    dataPush.push(prefix)
    prefix = "normal-case"
    dataPush.push(prefix)
    prefix = "full-width"
    dataPush.push(prefix)
    prefix = "proportional-width"
    dataPush.push(prefix)

    return dataPush

}