import { Scale } from "./Scale";
import { Rotate } from "./Rotate";
import { Translate } from "./Translate";
import { Skew } from "./Skew";
import { TransformOrigin } from "./TransformOrigin";


export const Transform = (fullConfigTW) => {
      var dataPush = []
   
      const ObjTW = {
         "Scale": Scale(fullConfigTW),
         "Rotate": Rotate(fullConfigTW),
         "Translate": Translate(fullConfigTW),
         "Skew": Skew(fullConfigTW),
         "TransformOrigin": TransformOrigin(fullConfigTW)
      }


      for (const [key, value] of Object.entries(ObjTW)) {
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
      
 
      return dataPush
}