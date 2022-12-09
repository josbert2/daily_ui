export const MaxWidth = (fullConfigTW) => {
   var dataPush = []

  
   
  
   const prefix = ['max-w']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.maxWidth)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}