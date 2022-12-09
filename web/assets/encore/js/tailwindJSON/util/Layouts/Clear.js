export const Clear = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['clear-left', 'clear-right', 'clear-both', 'clear-none']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}