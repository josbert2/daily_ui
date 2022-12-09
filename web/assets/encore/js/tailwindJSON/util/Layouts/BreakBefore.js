export const BreakBefore = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['break-before']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.breakBefore)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}