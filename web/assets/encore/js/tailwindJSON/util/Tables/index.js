import { TableLayout } from './TableLayout'
import { BorderCollapse } from './BorderCollapse'
import { BorderSpacing } from './BorderSpacing'

export const Tables = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "TableLayout": TableLayout(fullConfigTWMain),
         "BorderCollapse": BorderCollapse(fullConfigTWMain),
         "BorderSpacing": BorderSpacing(fullConfigTWMain),
      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
     
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}