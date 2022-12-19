export const Colors = (fullConfigTW) => {

   var colorAvailable = fullConfigTW.theme.colors
   var prefix = ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700']
   var dataPush = []

   for (const [key, value] of Object.entries(colorAvailable)) {
      
      if (typeof value === 'string') {
         dataPush.push(key)
      } else {
         for (var i = 0; i < prefix.length; i++) {
            dataPush.push(key + '-' + prefix[i])
         }
      }
   }
   

 

   return dataPush

}