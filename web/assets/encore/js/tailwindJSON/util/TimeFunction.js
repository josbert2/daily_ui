export const TimeFunction = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['ease']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.transitionTimingFunction)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}
