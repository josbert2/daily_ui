export const ScrollBehavior = (fullConfigTW) => {

   var dataPush = []

   var prefix = 'scroll'
   var prefixPosition = ['smooth', 'auto']
   var Space = fullConfigTW.theme.spacing

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
         
   

   console.log(dataPush)

   
   return dataPush
}


   