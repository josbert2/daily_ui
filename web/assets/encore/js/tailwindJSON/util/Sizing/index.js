import { Width } from './Width';
import { MinWidth } from './MinWidth';
import { MaxWidth } from './MaxWidth';
import { Height } from './Height';
import { MinHeight } from './MinHeight';
import { MaxHeight } from './MaxHeight';


export const Sizing = (fullConfigTW) => {
   var dataPush = []
   var fullConfigTWMain = fullConfigTW

   const ObjTW = {
      "Width": Width(fullConfigTWMain),
      "MinWidth": MinWidth(fullConfigTWMain),
      "MaxWidth": MaxWidth(fullConfigTWMain),
      "Height": Height(fullConfigTWMain),
      "MinHeight": MinHeight(fullConfigTWMain),
      "MaxHeight": MaxHeight(fullConfigTWMain),
   }

   for (const [key, value] of Object.entries(ObjTW)) {
      for (var i = 0; i < value.length; i++) {
         dataPush.push(value[i])
      }
   }

   return dataPush

}