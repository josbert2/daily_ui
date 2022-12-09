export const OutlineOffset = (fullConfigTW) => {
   var dataPush = []

   var prefixOutlineOffset = ['0', '2', '4', '8']

   for (var i = 0; i < prefixOutlineOffset.length; i++) {
      dataPush.push('outline-offset-' + prefixOutlineOffset[i])
   }

   return dataPush
}