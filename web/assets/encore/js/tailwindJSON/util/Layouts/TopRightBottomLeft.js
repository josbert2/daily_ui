export const TopRightBottomLeft = (fullConfigTW) => {

   var dataPush = []

   const prefix = ['inset', 'inset-x', 'inset-y', 'top', 'right', 'bottom', 'left']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}
