export const PointerEvents = (fullConfigTW) => {
   
      var dataPush = []
   
      var prefix = 'pointer-events'
      var prefixPosition = ['none', 'auto']
      var Space = fullConfigTW.theme.spacing
   
      for (var i = 0; i <  prefixPosition.length; i++) {
         dataPush.push(prefix + '-' + prefixPosition[i])
      }
            
      
      return dataPush
   }