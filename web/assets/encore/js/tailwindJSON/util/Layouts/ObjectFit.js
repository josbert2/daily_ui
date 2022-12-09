export const ObjectFit = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}