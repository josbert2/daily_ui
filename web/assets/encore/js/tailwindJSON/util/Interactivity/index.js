import { WillChange } from "./WillChange";
import { UserSelect } from "./UserSelect";
import { TouchAction } from "./TouchAction";
import { ScrollSnapType } from "./ScrollSnapType";
import { ScrollSnapAlign } from "./ScrollSnapAlign";
import { ScrollSnapStop } from "./ScrollSnapStop";
import { ScrollPadding } from "./ScrollPadding";
import { ScrollBehavior } from "./ScrollBehavior";
import { Resize } from "./Resize";
import { Cursor } from "./Cursor";




export const Interactivity = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "WillChange": WillChange(fullConfigTWMain),
         "UserSelect": UserSelect(fullConfigTWMain),
         "TouchAction": TouchAction(fullConfigTWMain),
         "ScrollSnapType": ScrollSnapType(fullConfigTWMain),
         "ScrollSnapAlign": ScrollSnapAlign(fullConfigTWMain),
         "ScrollSnapStop": ScrollSnapStop(fullConfigTWMain),
         "ScrollPadding": ScrollPadding(fullConfigTWMain),
         "ScrollBehavior": ScrollBehavior(fullConfigTWMain),
         "Resize": Resize(fullConfigTWMain),


      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
     
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}