import { MaxWidth } from "./util/MaxWidth"
import { MinWidth } from "./util/MinWidth"
import { MinHeight } from "./util/MinHeight"
import { MaxHeight } from "./util/MaxHeight"
import { Width } from "./util/Width"
import { Height } from "./util/Height"
import { Padding } from "./util/Padding"


// Transitions
import { Transition } from "./util/Transitions"
import { Durations } from "./util/Durations"
import { TimeFunction } from "./util/TimeFunction"
import { Delay } from "./util/Delay"
import { Animation } from "./util/Animation"

import { Layouts } from "./util/Layouts"

import { Border } from "./util/Border"
import { Divide } from "./util/Divide"
import { Outline } from "./util/Outline"


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
        "transition": Transition(fullConfigTWMain),
        "duration": Durations(fullConfigTWMain),
        "TimeFunction": TimeFunction(fullConfigTWMain),
        "Delay": Delay(fullConfigTWMain),
        "Animation": Animation(fullConfigTWMain),
        "Border": Border(fullConfigTWMain),
        "Divide": Divide(fullConfigTWMain),
        "Outline": Outline(fullConfigTWMain),
        "Layouts": Layouts(fullConfigTWMain)

    }

    console.log(ObjTW)

    
    for (const [key, value] of Object.entries(ObjTW)) {
        for (var i = 0; i < value.length; i++) {
            fullDataMaster.push(value[i])
        }
    }
 
    
 
    return fullDataMaster
 }