export const BackgroundClip = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'bg-clip'
   var prefixPosition = ['border', 'content', 'padding', 'text']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           

   

   return dataPush
}