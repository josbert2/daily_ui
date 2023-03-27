import { Margin } from './Margin'
import { Padding } from './Padding'
import { SpaceBetween } from './SpaceBetween'


export const Spacing = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "Margin": Margin(fullConfigTWMain),
         "Padding": Padding(fullConfigTWMain),
         "SpaceBetween": SpaceBetween(fullConfigTWMain),
      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
     
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}