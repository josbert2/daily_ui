export const OutlineColor = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['outline']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.borderColor)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}