export const Floats = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['float']
   const prefixPosition = ['left', 'right', 'none']

   for (var i = 0; i <  prefix.length; i++) {
      for (var j = 0; j <  prefixPosition.length; j++) {
         dataPush.push(prefix[i] + '-' + prefixPosition[j])
      }
   }
   
   

   return dataPush
}