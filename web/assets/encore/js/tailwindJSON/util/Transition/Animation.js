export const Animation = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['animate']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.animation)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}