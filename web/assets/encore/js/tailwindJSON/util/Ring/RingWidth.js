export const RingWidth = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['Ring']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.RingWidth)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}