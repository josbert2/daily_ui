export const BackgroundRepeat = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = 'bg-repeat'
    var prefixPosition = ['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'repeat-round', 'repeat-space']
    
    for (var i = 0; i <  prefixPosition.length; i++) {
        dataPush.push(prefix + '-' + prefixPosition[i])
    }
            
    
    
    
    
    return dataPush
    }