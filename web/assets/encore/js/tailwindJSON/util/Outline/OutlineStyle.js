export const OutlineStyle = (fullConfigTW) => {

   var prefixOutline = ['solid', 'dashed', 'dotted', 'double', 'none']

   var dataPush = []

   for (var i = 0; i < prefixOutline.length; i++) {
      dataPush.push('outline-' + prefixOutline[i])
   }

   return dataPush

}
