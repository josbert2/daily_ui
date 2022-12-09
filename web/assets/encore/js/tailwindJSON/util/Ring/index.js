import { RingWidth } from "./RingWidth";
import { RingRadius } from "./RingRadius";
import { RingColor } from "./RingColor";
import { RingStyle } from "./RingStyle";
import { RingOffsetWidth } from "./RingOffsetWidth";
import { RingOffsetColor } from "./RingOffsetColor";

export const Ring = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "RingWidth": RingWidth(fullConfigTWMain),
         "RingRadius": RingRadius(fullConfigTWMain),
         "RingColor": RingColor(fullConfigTWMain),
         "RingStyle": RingStyle(fullConfigTWMain),
         "RingOffsetWidth": RingOffsetWidth(fullConfigTWMain),
         "RingOffsetColor": RingOffsetColor(fullConfigTWMain)
      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}