



import { Layouts } from "./util/Layouts"
import { FlexboxGrid } from "./util/FlexboxGrid"
import { Spacing } from "./util/Spacing"
import { Sizing } from "./util/Sizing"
import { Typography } from "./util/Typography"
import { Backgrounds } from "./util/Background"
import { Border } from "./util/Border"
import { Effects } from "./util/Effects"
import { Filters } from "./util/Filters"
import { Tables } from "./util/Tables"
import { Transition } from "./util/Transition"
import { Transform } from "./util/Transform"
import { Interactivity } from "./util/Interactivity"
import { Svg } from "./util/Svg"

import { Divide } from "./util/Divide"
import { Outline } from "./util/Outline"













export const mainMasterData = (fullConfigTW, data) => {
    var dataPush = []
    var fullConfigTWMain = fullConfigTW
    var fullDataMaster = data



 
    const ObjTW = {
        //'aspectRatio': AspectRatio(fullConfigTWMain),

        "Layouts": Layouts(fullConfigTWMain),
        "FlexboxGrid": FlexboxGrid(fullConfigTWMain),
        "Spacing": Spacing(fullConfigTWMain),
        "Sizing": Sizing(fullConfigTWMain),
        "Typography": Typography(fullConfigTWMain),
        "Backgrounds": Backgrounds(fullConfigTWMain),
        "Border": Border(fullConfigTWMain),
        "Effects": Effects(fullConfigTWMain),
        "Filters": Filters(fullConfigTWMain),
        "Tables": Tables(fullConfigTWMain),
        "Transition": Transition(fullConfigTWMain),
        "Transform": Transform(fullConfigTWMain),
        "Interactivity": Interactivity(fullConfigTWMain),
        "Svg": Svg(fullConfigTWMain),
        "Divide": Divide(fullConfigTWMain),
        "Outline": Outline(fullConfigTWMain),

    }



    
    for (const [key, value] of Object.entries(ObjTW)) {
        for (var i = 0; i < value.length; i++) {
            fullDataMaster.push(value[i])
        }
    }
 

 
    return fullDataMaster
 }