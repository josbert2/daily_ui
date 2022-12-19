export const BackdropInvert = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'backdrop-invert'
   var prefixPosition = ['0', '']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           

   

   return dataPush
}