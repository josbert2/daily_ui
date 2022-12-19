export const TransitionsPropery = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['transition']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.transitionProperty)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}