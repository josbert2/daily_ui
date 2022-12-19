export const ScrollSnapAlign = (fullConfigTW) => {
   
      var dataPush = []
   
      const prefix = ['scroll-snap-align']
      const prefixPosition = ['none', 'start', 'end', 'center', 'stretch', 'initial', 'inherit']
   
      for (var i = 0; i <  prefix.length; i++) {
         for (var j = 0; j <  prefixPosition.length; j++) {
            dataPush.push(prefix[i] + '-' + prefixPosition[j])
         }
      }
   
      
   
      return dataPush
   }