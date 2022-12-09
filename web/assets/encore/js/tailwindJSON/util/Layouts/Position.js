export const Position = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['static', 'fixed', 'absolute', 'relative', 'sticky']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}