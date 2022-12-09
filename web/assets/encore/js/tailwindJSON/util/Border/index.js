import { BorderWidth } from "./BorderWidth";
import { BorderRadius } from "./BorderRadius";
import { BorderColor } from "./BorderColor";
import { BorderStyle } from "./BorderStyle";

export const Border = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "borderWidth": BorderWidth(fullConfigTWMain),
         "borderRadius": BorderRadius(fullConfigTWMain),
         "borderColor": BorderColor(fullConfigTWMain),
         "borderStyle": BorderStyle(fullConfigTWMain)
      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}