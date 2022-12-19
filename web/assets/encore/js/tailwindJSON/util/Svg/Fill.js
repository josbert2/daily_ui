import { Colors } from "../Colors"

export const Fill = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['fill']
   const prefixPosition = Colors(fullConfigTW)  

   for (var i = 0; i <  prefix.length; i++) {
      for (var j = 0; j <  prefixPosition.length; j++) {
         dataPush.push(prefix[i] + '-' + prefixPosition[j])
      }
   }

   

   return dataPush
}