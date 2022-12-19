export const Cursor = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'cursor'
   var prefixPosition = ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'not-allowed', 'help', 'progress', 'grab', 'grabbing']
   var Space = fullConfigTW.theme.spacing

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
          
   

   return dataPush
}