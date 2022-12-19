import { Colors } from "../Colors"
export const BoxShadowColor = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'shadow'
   var prefixPosition = Colors(fullConfigTW)

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
    

   return dataPush
}