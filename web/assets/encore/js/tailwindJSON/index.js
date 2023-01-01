



import { Layouts } from "./util/Layouts"

import { Border } from "./util/Border"
import { Divide } from "./util/Divide"
import { Outline } from "./util/Outline"

import { Svg } from "./util/Svg"
import { Interactivity } from "./util/Interactivity"

import { Transform } from "./util/Transform"
import { Transition } from "./util/Transition"

import { Typography } from "./util/Typography"
import { FlexboxGrid } from "./util/FlexboxGrid"





export const mainMasterData = (fullConfigTW, data) => {
    var dataPush = []
    var fullConfigTWMain = fullConfigTW
    var fullDataMaster = data



 
    const ObjTW = {
        //'aspectRatio': AspectRatio(fullConfigTWMain),

        "Border": Border(fullConfigTWMain),
        "Divide": Divide(fullConfigTWMain),
        "Outline": Outline(fullConfigTWMain),
        "Layouts": Layouts(fullConfigTWMain),
        "Svg": Svg(fullConfigTWMain),
        "Interactivity": Interactivity(fullConfigTWMain),
        "Transform": Transform(fullConfigTWMain),
        "Transition": Transition(fullConfigTWMain),
        "Typography": Typography(fullConfigTWMain),
        "FlexboxGrid": FlexboxGrid(fullConfigTWMain),

    }



    
    for (const [key, value] of Object.entries(ObjTW)) {
        for (var i = 0; i < value.length; i++) {
            fullDataMaster.push(value[i])
        }
    }
 

 
    return fullDataMaster
 }