export const BreakAfter = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['break-after']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.breakAfter)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}