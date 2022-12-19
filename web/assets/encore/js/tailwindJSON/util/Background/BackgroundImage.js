export const BackgroundImage = (fullConfigTW) => {

    var dataPush = []
    
    var prefix = 'bg-grandient'
    var prefixPosition = ['to-t', 'to-tr', 'to-r', 'to-br', 'to-b', 'to-bl', 'to-l', 'to-tl']
    
    for (var i = 0; i <  prefixPosition.length; i++) {
        dataPush.push(prefix + '-' + prefixPosition[i])
    }
              
    
    
    
    
    
    return dataPush
    }