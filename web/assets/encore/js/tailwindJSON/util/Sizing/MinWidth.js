export const MinWidth = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['min-w']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.minWidth)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}