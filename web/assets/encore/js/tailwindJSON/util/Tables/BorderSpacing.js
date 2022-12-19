export const BorderSpacing = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'border'
   var prefixPosition = ['x', 'y', 'z']
   var prefixSpace = fullConfigTW.theme.borderSpacing


   for (var i = 0; i <  prefixPosition.length; i++) {
      for (const [key, value] of Object.entries(prefixSpace)) {
         dataPush.push(prefix + '-' + prefixPosition[i] + '-' + key)
      }
   }
           
    

   return dataPush
}