export const ScrollSnapType = (fullConfigTW) => {
   
      var dataPush = []
   
      const prefix = ['scroll-snap-type']
      const prefixPosition = ['none', 'x', 'y', 'mandatory', 'proximity', 'initial', 'inherit']
   
      for (var i = 0; i <  prefix.length; i++) {
         for (var j = 0; j <  prefixPosition.length; j++) {
            dataPush.push(prefix[i] + '-' + prefixPosition[j])
         }
      }
   
      
   
      return dataPush
   }