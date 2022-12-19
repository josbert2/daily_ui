export const z = (fullConfigTW) => {
   var dataPush = []
   const prefix = ['z']
   const prefixPosition = ['0', '10', '20', '30', '40', '50', 'auto']

   for (var i = 0; i <  prefix.length; i++) {
      for (var j = 0; j <  prefixPosition.length; j++) {
         dataPush.push(prefix[i] + '-' + prefixPosition[j])
      }
   }

   return dataPush
   
}