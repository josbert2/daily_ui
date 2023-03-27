export const BorderSpacing = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'border'
   var prefixPosition = ['x', 'y', 'z']
   var prefixSpace = fullConfigTW.theme.borderSpacing
   console.log( fullConfigTW.theme)

   console.log(prefixPosition.length)
  for (var i = 0; i < prefixPosition.length; i++) {
      for (var j = 0; j < prefixSpace.length; j++) {
         dataPush.push(prefix + '-' + prefixPosition[i] + '-' + prefixSpace[j])
      }
   }
           
    

   return dataPush
}