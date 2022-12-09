export const RingStyle = (fullConfigTW) => {
   var dataPush = []

   var prefixRing = ['solid', 'dashed', 'dotted', 'double', 'none']

   for (var i = 0; i < prefixRing.length; i++) {
      dataPush.push('Ring-' + prefixRing[i])
   }

   return dataPush
}