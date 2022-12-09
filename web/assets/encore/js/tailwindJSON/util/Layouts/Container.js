export const Container = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['container']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.screens)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}