export const Translate = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'translate'
   var prefixPosition = ['x', 'y', 'z']
   var prefixSpace = fullConfigTW.theme.translate

   for (var i = 0; i <  prefixPosition.length; i++) {
      for (const [key, value] of Object.entries(prefixSpace)) {
         dataPush.push(prefix + '-' + prefixPosition[i] + '-' + key)
      }
   }
    

   return dataPush
}