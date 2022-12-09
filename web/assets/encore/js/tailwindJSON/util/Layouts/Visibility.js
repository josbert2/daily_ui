export const Visibility = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['visible', 'invisible']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}