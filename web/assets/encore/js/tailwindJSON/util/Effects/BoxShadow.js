export const BoxShadow = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'shadow'
   var prefixPosition = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'outline', 'none']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    

   return dataPush
}