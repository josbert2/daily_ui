export const MinHeight = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['min-h']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.minHeight)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
  
}