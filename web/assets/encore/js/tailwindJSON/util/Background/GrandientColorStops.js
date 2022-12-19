import { Colors } from "../Colors"
export const GrandientColorStops = (fullConfigTW) => {
    var dataPush = []
    var prefix = 'from'
    var prefixPosition = Colors(fullConfigTW)
    
    for (var i = 0; i <  prefixPosition.length; i++) {
        dataPush.push(prefix + '-' + prefixPosition[i])
    }

    return dataPush
}