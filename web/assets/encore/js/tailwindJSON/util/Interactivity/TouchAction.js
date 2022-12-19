export const TouchAction = (fullConfigTW) => {
   
      var dataPush = []
   
      const prefix = ['touch-action']
      const prefixPosition = ['auto', 'none', 'pan-x', 'pan-left', 'pan-right', 'pan-y', 'pan-up', 'pan-down', 'pinch-zoom', 'manipulation', 'initial', 'inherit']

      for (var i = 0; i <  prefix.length; i++) {
         for (var j = 0; j <  prefixPosition.length; j++) {
            dataPush.push(prefix[i] + '-' + prefixPosition[j])
         }
      }


      return dataPush

   }  