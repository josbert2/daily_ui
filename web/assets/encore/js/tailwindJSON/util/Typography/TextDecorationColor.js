import { Colors } from "../Colors"

export const TextDecorationColor = (fullConfigTW) => {

    var dataPush = []
    
    const prefix = ['underline', 'line-through', 'no-underline']
    const prefixPosition = Colors(fullConfigTW)  
    
    for (var i = 0; i <  prefix.length; i++) {
        for (var j = 0; j <  prefixPosition.length; j++) {
            dataPush.push(prefix[i] + '-' + prefixPosition[j])
        }
    }
    
    
    
    return dataPush
    }