export const DropShadow = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'drop-shadow'
   var prefixPosition = ['none', 'sm', 'md', 'lg', 'xl', '2xl']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    

   return dataPush
}