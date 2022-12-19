export const Blur = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'blur'
   var prefixPosition = ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    

   return dataPush
}