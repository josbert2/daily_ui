import { Fill } from "./Fill";
import { Stroke } from "./Stroke";
import { StrokeWidth } from "./StrokeWidth";


export const Svg = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "Fill": Fill(fullConfigTWMain),
         "Stroke": Stroke(fullConfigTWMain),
         "StrokeWidth": StrokeWidth(fullConfigTWMain)  
      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
     
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}