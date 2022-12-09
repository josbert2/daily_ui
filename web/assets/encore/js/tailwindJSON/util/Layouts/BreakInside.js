export const BreakInside = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['break-inside']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.breakInside)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}