export const Saturate = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'saturate'
   var prefixPosition = ['0', '50', '100', '150', '200']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    

   return dataPush
}