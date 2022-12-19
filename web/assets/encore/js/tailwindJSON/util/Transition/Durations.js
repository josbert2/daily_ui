export const Durations = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['duration']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.transitionDuration)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}