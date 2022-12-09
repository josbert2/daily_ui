import { AspectRatio } from "./AspectRatio";
import { Container } from "./Container";
import { Column } from "./Column";
import { BreakAfter } from "./BreakAfter";
import { BreakBefore } from "./BreakBefore";
import { BreakInside } from "./BreakInside";
import { BoxDecorationBreak } from "./BoxDecorationBreak";
import { BoxSizing } from "./BoxSizing";
import { Display } from "./Display";
import { Floats } from "./Floats";
import { Clear } from "./Clear";
import { Isolation } from "./Isolation";
import { ObjectFit } from "./ObjectFit";
import { ObjectPosition } from "./ObjectPosition";
import { Overflow } from "./Overflow";
import { OverscrollBehavior } from "./OverscrollBehavior";
import { Position } from "./Position";
import { TopRightBottomLeft } from "./TopRightBottomLeft";
import { Visibility } from "./Visibility";
import { ZIndex } from "./ZIndex";


export const Layouts = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "aspectRatio": AspectRatio(fullConfigTWMain),
         "container": Container(fullConfigTWMain),
         "column": Column(fullConfigTWMain),
         "breakAfter": BreakAfter(fullConfigTWMain),
         "breakBefore": BreakBefore(fullConfigTWMain),
         "breakInside": BreakInside(fullConfigTWMain),
         "boxDecorationBreak": BoxDecorationBreak(fullConfigTWMain),
         "boxSizing": BoxSizing(fullConfigTWMain),
         "display": Display(fullConfigTWMain),
         "floats": Floats(fullConfigTWMain),
         "clear": Clear(fullConfigTWMain),
         "isolation": Isolation(fullConfigTWMain),
         "objectFit": ObjectFit(fullConfigTWMain),
         "objectPosition": ObjectPosition(fullConfigTWMain),
         "overflow": Overflow(fullConfigTWMain),
         "overscrollBehavior": OverscrollBehavior(fullConfigTWMain),
         "position": Position(fullConfigTWMain),
         "topRightBottomLeft": TopRightBottomLeft(fullConfigTWMain),
         "visibility": Visibility(fullConfigTWMain),
         "zIndex": ZIndex(fullConfigTWMain),
      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}