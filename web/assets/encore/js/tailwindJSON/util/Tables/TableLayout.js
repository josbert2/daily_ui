export const TableLayout = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'table-layout'
   var prefixPosition = ['auto', 'fixed']

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
           
    
   return dataPush
}