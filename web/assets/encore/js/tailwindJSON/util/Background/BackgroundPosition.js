export const BackgroundPosition = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = 'bg-position'
    var prefixPosition = ['center', 'top', 'right', 'bottom', 'left']
    
    for (var i = 0; i <  prefixPosition.length; i++) {
        dataPush.push(prefix + '-' + prefixPosition[i])
    }
              
    
    
    
    return dataPush
}