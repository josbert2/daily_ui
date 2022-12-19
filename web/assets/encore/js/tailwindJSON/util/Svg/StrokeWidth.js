export const StrokeWidth = (fullConfigTW) => {

   var dataPush  = []
   var prefix = [0, 1, 2]

   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push('stroke-' + prefix[i])
   }

   return dataPush

}