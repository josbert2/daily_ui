export const Column = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['col']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.screens)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}