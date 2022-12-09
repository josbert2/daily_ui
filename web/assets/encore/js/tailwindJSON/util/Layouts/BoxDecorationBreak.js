export const BoxDecorationBreak = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['box-decoration-break']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.boxDecorationBreak)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}