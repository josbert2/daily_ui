
export const WillChange = (fullConfigTW) => {
   var dataPush = []

   
   const prefix = ['will-change']
   const prefixPosition = ['auto', 'scroll', 'contents', 'transform', 'opacity', 'initial', 'inherit']

   for (var i = 0; i <  prefix.length; i++) {
      for (var j = 0; j <  prefixPosition.length; j++) {
         dataPush.push(prefix[i] + '-' + prefixPosition[j])
      }
   }
   
   

   return dataPush
}