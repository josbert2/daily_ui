export const RingOffsetWidth = (fullConfigTW) => {
   var dataPush = []

   var prefixRingOffsetWidth = ['0', '1', '2', '4', '8']

   for (var i = 0; i < prefixRingOffsetWidth.length; i++) {
      dataPush.push('ring-offset-' + prefixRingOffsetWidth[i])
   }

   return dataPush
}