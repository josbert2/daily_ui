export const BackdropConstrast = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'backdrop-contrast'
   var prefixPosition = ['0', '50', '75', '100', '125', '150', '200']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           

   

   return dataPush
}