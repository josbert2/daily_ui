export const Height = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['h']
   for (var i = 0; i <  prefix.length; i++) {
         for (const [key, value] of Object.entries(fullConfigTW.theme.height)) {
            dataPush.push(prefix[i] + '-' + key)
         }
   }

   return dataPush 

}