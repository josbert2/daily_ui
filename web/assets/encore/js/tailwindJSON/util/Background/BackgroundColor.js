import { Colors } from "../Colors"

export const BackgroundColor = (fullConfigTW) => {
   var dataPush = []

   var prefix = 'bg'
   var prefixPosition = Colors(fullConfigTW)

   for (var i = 0; i <  prefixPosition.length; i++) {
      dataPush.push(prefix + '-' + prefixPosition[i])
   }
            
   return dataPush
}