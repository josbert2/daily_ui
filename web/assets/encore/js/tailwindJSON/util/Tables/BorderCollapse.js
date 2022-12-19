export const BorderCollapse = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'border-collapse'
   var prefixPosition = ['collapse', 'separate']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    

   return dataPush
}