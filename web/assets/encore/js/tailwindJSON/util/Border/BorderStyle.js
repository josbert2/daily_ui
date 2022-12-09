export const BorderStyle = (fullConfigTW) => {
   var dataPush = []

   var prefixBorder = ['solid', 'dashed', 'dotted', 'double', 'none']

   for (var i = 0; i < prefixBorder.length; i++) {
      dataPush.push('border-' + prefixBorder[i])
   }

   return dataPush
}