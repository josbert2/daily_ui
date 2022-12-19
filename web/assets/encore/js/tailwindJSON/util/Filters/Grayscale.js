export const Grayscale = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'grayscale'
   var prefixPosition = ['0', '']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    

   return dataPush
}