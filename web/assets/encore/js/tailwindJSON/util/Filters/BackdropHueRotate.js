export const BackdropHueRotate = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'backdrop-hue-rotate'
   var prefixPosition = ['0', '15', '30', '45', '60', '75', '90', '180']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           

   

   return dataPush
}