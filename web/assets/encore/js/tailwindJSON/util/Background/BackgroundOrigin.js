export const BackgroundOrigin = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'bg-origin'
   var prefixPosition = ['border', 'padding', 'content']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           

   

   return dataPush
}