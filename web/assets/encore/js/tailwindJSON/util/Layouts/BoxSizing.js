export const BoxSizing = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['box-border', 'box-content']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}