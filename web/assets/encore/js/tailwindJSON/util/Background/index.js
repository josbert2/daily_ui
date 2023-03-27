import { BackgroundAttachment } from './BackgroundAttachment'
import { BackgroundClip } from './BackgroundClip'
import { BackgroundColor } from './BackgroundColor'
import { BackgroundImage } from './BackgroundImage'

import { BackgroundPosition } from './BackgroundPosition'
import { BackgroundRepeat } from './BackgroundRepeat'
import { BackgroundSize } from './BackgroundSize'


export const Backgrounds = (fullConfigTW) => {
        var dataPush = []
        var fullConfigTWMain = fullConfigTW
        
        const ObjTW = {
             "backgroundAttachment": BackgroundAttachment(fullConfigTWMain),
             "backgroundClip": BackgroundClip(fullConfigTWMain),
             "backgroundColor": BackgroundColor(fullConfigTWMain),
             "backgroundImage": BackgroundImage(fullConfigTWMain),
             "backgroundPosition": BackgroundPosition(fullConfigTWMain),
             "backgroundRepeat": BackgroundRepeat(fullConfigTWMain),
             "backgroundSize": BackgroundSize(fullConfigTWMain)
        }
        
        for (const [key, value] of Object.entries(ObjTW)) {
             for (var i = 0; i < value.length; i++) {
                 dataPush.push(value[i])
             }
        }
        
        return dataPush
}