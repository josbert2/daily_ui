export const Constrast = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'constrast'
   var prefixPosition = ['50', '75', '90', '95', '100', '105', '110', '125', '150', '200']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    

   return dataPush
}