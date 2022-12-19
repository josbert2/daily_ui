export const BackgroundAttachment = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'bg-attachment'
   var prefixPosition = ['fixed', 'local', 'scroll']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           

   

   return dataPush
}