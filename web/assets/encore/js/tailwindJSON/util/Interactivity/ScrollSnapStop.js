export const ScrollSnapStop = (fullConfigTW) => {
   
      var dataPush = []
   
      const prefix = ['scroll-snap-stop']
      const prefixPosition = ['normal', 'always', 'never', 'initial', 'inherit']
   
      for (var i = 0; i <  prefix.length; i++) {
         for (var j = 0; j <  prefixPosition.length; j++) {
            dataPush.push(prefix[i] + '-' + prefixPosition[j])
         }
      }
   
      
   
      return dataPush
   }