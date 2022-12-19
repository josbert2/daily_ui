export const UserSelect = (fullConfigTW) => {

   var dataPush = []

   const prefix = ['user-select']
   const prefixPosition = ['auto', 'text', 'all', 'none', 'initial', 'inherit']

   for (var i = 0; i <  prefix.length; i++) {
      for (var j = 0; j <  prefixPosition.length; j++) {
         dataPush.push(prefix[i] + '-' + prefixPosition[j])
      }
   }

   

   return dataPush
}