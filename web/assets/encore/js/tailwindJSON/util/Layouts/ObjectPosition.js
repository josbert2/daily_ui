export const ObjectPosition = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['object-center', 'object-top', 'object-right', 'object-bottom', 'object-left', 'object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}