import { OutlineWidth } from "./OutlineWidth";
import { OutlineColor } from "./OutlineColor";
import { OutlineOffset } from "./OutlineOffset";
import { OutlineStyle } from "./OutlineStyle";


export const Outline = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
          "OutlineWidth": OutlineWidth(fullConfigTWMain),
          "OutlineColor": OutlineColor(fullConfigTWMain),
          "OutlineOffset": OutlineOffset(fullConfigTWMain),
          "OutlineStyle": OutlineStyle(fullConfigTWMain)
      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}