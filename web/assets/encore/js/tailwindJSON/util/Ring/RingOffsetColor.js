export const RingOffsetColor = (fullConfigTW) => {
   var dataPush = []

   var prefixRingOffsetColor = ['transparent', 'current', 'black', 'white', 'gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']

   for (var i = 0; i < prefixRingOffsetColor.length; i++) {
      dataPush.push('ring-offset-' + prefixRingOffsetColor[i])
   }

   return dataPush
}