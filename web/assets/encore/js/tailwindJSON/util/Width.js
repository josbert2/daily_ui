export const Width = (fullConfigTW) => {
   var dataPush = []
   const prefix = ['w']

   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.width)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}