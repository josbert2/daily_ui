export const Isolation = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['isolate', 'isolation-auto']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}