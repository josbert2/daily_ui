export const TransformOrigin = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'origin'
   var prefixPosition = ['top', 'right', 'bottom', 'left', 'center']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
            
   

   return dataPush
}