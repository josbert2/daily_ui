export const Skew = (fullConfigTW) => {

   var dataPush = []

   var prefix = 'skew'
   var prefixPosition = ['x', 'y']
   var prefixValue = ['-12', '-6', '1', '2', '3', '6', '12']

   for (var i = 0; i <  prefixPosition.length; i++) {
      for (var j = 0; j <  prefixValue.length; j++) {
         dataPush.push(prefix + '-' + prefixPosition[i] + '-' + prefixValue[j])
      }
   }
           
    

   return dataPush
}