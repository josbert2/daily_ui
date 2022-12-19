import { Blur } from './Blur'
import { Brightness } from './Brightness'
import { Contrast } from './Contrast'
import { DropShadow } from './DropShadow'
import { Grayscale } from './Grayscale'
import { HueRotate } from './HueRotate'
import { Invert } from './Invert'
import { Opacity } from './Opacity'
import { Saturate } from './Saturate'
import { Sepia } from './Sepia'
import { BackdropBlur } from './BackdropBlur'
import { BackdropBrightness } from './BackdropBrightness'
import { BackdropContrast } from './BackdropContrast'
import { BackdropGrayscale } from './BackdropGrayscale'
import { BackdropHueRotate } from './BackdropHueRotate'
import { BackdropInvert } from './BackdropInvert'
import { BackdropOpacity } from './BackdropOpacity'
import { BackdropSaturate } from './BackdropSaturate'
import { BackdropSepia } from './BackdropSepia'



export const Tables = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "Blur": Blur(fullConfigTWMain),
         "Brightness": Brightness(fullConfigTWMain),
         "Contrast": Contrast(fullConfigTWMain),
         "DropShadow": DropShadow(fullConfigTWMain),
         "Grayscale": Grayscale(fullConfigTWMain),
         "HueRotate": HueRotate(fullConfigTWMain),
         "Invert": Invert(fullConfigTWMain),
         "Opacity": Opacity(fullConfigTWMain),
         "Saturate": Saturate(fullConfigTWMain),
         "Sepia": Sepia(fullConfigTWMain),
         "BackdropBlur": BackdropBlur(fullConfigTWMain),
         "BackdropBrightness": BackdropBrightness(fullConfigTWMain),
         "BackdropContrast": BackdropContrast(fullConfigTWMain),
         "BackdropGrayscale": BackdropGrayscale(fullConfigTWMain),
         "BackdropHueRotate": BackdropHueRotate(fullConfigTWMain),
         "BackdropInvert": BackdropInvert(fullConfigTWMain),
         "BackdropOpacity": BackdropOpacity(fullConfigTWMain),
         "BackdropSaturate": BackdropSaturate(fullConfigTWMain),
         "BackdropSepia": BackdropSepia(fullConfigTWMain),
      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
     
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}