import { BoxShadow } from "./BoxShadow"
import { Opacity } from "./Opacity"
import { BoxShadowColor } from "./BoxShadowColor"
import { MixBlendMode } from "./MixBlendMode"
import { BackgroundBlendMode } from "./BackgroundBlendMode"

export const Interactivity = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "BoxShadow": BoxShadow(fullConfigTWMain),
         "Opacity": Opacity(fullConfigTWMain),
         "BoxShadowColor": BoxShadowColor(fullConfigTWMain),
         "MixBlendMode": MixBlendMode(fullConfigTWMain),
         "BackgroundBlendMode": BackgroundBlendMode(fullConfigTWMain),


      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
     
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}