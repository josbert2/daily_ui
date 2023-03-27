import { Blur } from './Blur'
import { Brightness } from './Brightness'
import { Constrast } from './Constrast'
import { DropShadow } from './DropShadow'
import { Grayscale } from './Grayscale'
import { HueRotate } from './HueRotate'
import { Invert } from './Invert'
import { Saturate } from './Saturate'
import { Sepia } from './Sepia'
import { BackdropBlur } from './BackdropBlur'
import { BackdropBrightness } from './BackdropBrightness'
import { BackdropConstrast } from './BackdropConstrast'
import { BackdropGrayScale } from './BackdropGrayScale'
import { BackdropHueRotate } from './BackdropHueRotate'
import { BackdropInvert } from './BackdropInvert'
import { BackdropOpacity } from './BackdropOpacity'
import { BackdropSaturate } from './BackdropSaturate'
import { BackdropSepia } from './BackdropSepia'



export const Filters = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "Blur": Blur(fullConfigTWMain),
         "Brightness": Brightness(fullConfigTWMain),
         "Constrast": Constrast(fullConfigTWMain),
         "DropShadow": DropShadow(fullConfigTWMain),
         "Grayscale": Grayscale(fullConfigTWMain),
         "HueRotate": HueRotate(fullConfigTWMain),
         "Invert": Invert(fullConfigTWMain),
         "Saturate": Saturate(fullConfigTWMain),
         "Sepia": Sepia(fullConfigTWMain),
         "BackdropBlur": BackdropBlur(fullConfigTWMain),
         "BackdropBrightness": BackdropBrightness(fullConfigTWMain),
         "BackdropConstrast": BackdropConstrast(fullConfigTWMain),
         "BackdropGrayScale": BackdropGrayScale(fullConfigTWMain),
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