export const BorderWidth = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['border']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.borderWidth)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}