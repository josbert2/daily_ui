export const DivideStyle = (fullConfigTW) => {

   var prefixDivide = ['solid', 'dashed', 'dotted', 'double', 'none']

   var dataPush = []

   for (var i = 0; i < prefixDivide.length; i++) {
      dataPush.push('divide-' + prefixDivide[i])
   }

   return dataPush

}
