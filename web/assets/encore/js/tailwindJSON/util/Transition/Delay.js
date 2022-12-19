export const Delay = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['delay']
   for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.transitionDelay)) {
         dataPush.push(prefix[i] + '-' + key)
      }
   }

   return dataPush
}