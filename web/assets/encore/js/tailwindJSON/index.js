import { MaxWidth } from "./util/MaxWidth"
import { MinWidth } from "./util/MinWidth"
import { MinHeight } from "./util/MinHeight"
import { MaxHeight } from "./util/MaxHeight"
import { Width } from "./util/Width"
import { Height } from "./util/Height"
import { Padding } from "./util/Padding"



import { Layouts } from "./util/Layouts"

import { Border } from "./util/Border"
import { Divide } from "./util/Divide"
import { Outline } from "./util/Outline"

import { Svg } from "./util/Svg"
import { Interactivity } from "./util/Interactivity"

import { Transform } from "./util/Transform"
import { Transition } from "./util/Transition"





export const mainMasterData = (fullConfigTW, data) => {
    var dataPush = []
    var fullConfigTWMain = fullConfigTW
    var fullDataMaster = data

 
    const ObjTW = {
        //'aspectRatio': AspectRatio(fullConfigTWMain),
        "maxWidth": MaxWidth(fullConfigTWMain),
        "minHeight": MinHeight(fullConfigTWMain),
        "maxHeight": MaxHeight(fullConfigTWMain),
        "width": Width(fullConfigTWMain),
        "height": Height(fullConfigTWMain),
        "padding": Padding(fullConfigTWMain),
        "minWidth": MinWidth(fullConfigTWMain),
        
        "Border": Border(fullConfigTWMain),
        "Divide": Divide(fullConfigTWMain),
        "Outline": Outline(fullConfigTWMain),
        "Layouts": Layouts(fullConfigTWMain),
        "Svg": Svg(fullConfigTWMain),
        "Interactivity": Interactivity(fullConfigTWMain),
        "Transform": Transform(fullConfigTWMain),
        "Transition": Transition(fullConfigTWMain),

    }



    
    for (const [key, value] of Object.entries(ObjTW)) {
        for (var i = 0; i < value.length; i++) {
            fullDataMaster.push(value[i])
        }
    }
 
    
 
    return fullDataMaster
 }