export const Appearance = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'appearance'
   var prefixPosition = ['none']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    

   return dataPush
}