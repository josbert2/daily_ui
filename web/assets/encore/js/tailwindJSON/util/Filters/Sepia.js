export const Sepia = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'sepia'
   var prefixPosition = ['0', '']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    

   return dataPush
}