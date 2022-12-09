export const Floats = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['float']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.float)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}