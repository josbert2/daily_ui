export const BackdropOpacity = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'backdrop-opacity'
   var prefixPosition = ['0', '5', '10', '20', '25', '30', '40', '50', '60', '70', '75', '80', '90', '95', '100']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           

   

   return dataPush
}