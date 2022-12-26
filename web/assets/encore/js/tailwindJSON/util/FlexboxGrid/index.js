import { AlignContent } from "./AlignContent"
import { AlignItems } from "./AlignItems"
import { AlignSelf } from "./AlignSelf"
import { Flex } from "./Flex"
import { FlexBasis } from "./FlexBasis"
import { FlexGrow } from "./FlexGrow"
import { FlexDirection } from "./FlexDirection"
import { FlexShrink } from "./FlexShrink"
import { FlexWrap } from "./FlexWrap"
import { Gap } from "./Gap"
import { GridAutoColumns } from "./GridAutoColumns"
import { GridAutoFlow } from "./GridAutoFlow"
import { GridAutoRows } from "./GridAutoRows"
import { GridColumnsStarEnd } from "./GridColumnsStarEnd"
import { GridRowStartEnd } from "./GridRowStartEnd"
import { JustifyContent } from "./JustifyContent"
import { JustifyItems } from "./JustifyItems"
import { JustifySelf } from "./JustifySelf"
import { Order } from "./Order"
import { PlaceContent } from "./PlaceContent"
import { PlaceItems } from "./PlaceItems"
import { PlaceSelf } from "./PlaceSelf"



export const FlexboxGrid = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
      const ObjTW = {
         "AlignContent": AlignContent(fullConfigTWMain),
         "AlignItems": AlignItems(fullConfigTWMain),
         "AlignSelf": AlignSelf(fullConfigTWMain),
         "Flex": Flex(fullConfigTWMain),
         "FlexBasis": FlexBasis(fullConfigTWMain),
         "FlexGrow": FlexGrow(fullConfigTWMain),
         "FlexDirection": FlexDirection(fullConfigTWMain),
         "FlexShrink": FlexShrink(fullConfigTWMain),
         "FlexWrap": FlexWrap(fullConfigTWMain),
         "Gap": Gap(fullConfigTWMain),
         "GridAutoColumns": GridAutoColumns(fullConfigTWMain),
         "GridAutoFlow": GridAutoFlow(fullConfigTWMain),
         "GridAutoRows": GridAutoRows(fullConfigTWMain),
         "GridColumnsStarEnd": GridColumnsStarEnd(fullConfigTWMain),
         "GridRowStartEnd": GridRowStartEnd(fullConfigTWMain),
         "JustifyContent": JustifyContent(fullConfigTWMain),
         "JustifyItems": JustifyItems(fullConfigTWMain),
         "JustifySelf": JustifySelf(fullConfigTWMain),
         "Order": Order(fullConfigTWMain),
         "PlaceContent": PlaceContent(fullConfigTWMain),
         "PlaceItems": PlaceItems(fullConfigTWMain),
         "PlaceSelf": PlaceSelf(fullConfigTWMain),

      }
      
   
      for (const [key, value] of Object.entries(ObjTW)) {
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}