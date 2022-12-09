export const RingRadius = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['rounded']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.RingRadius)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}
