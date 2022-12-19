import { FontSize } from './FontSize'
import { FontFamily } from './FontFamily'
export const Typography = (fullConfigTW) => {

    var dataPush = []

    const ObjTW = {
        "fontSize": FontSize(fullConfigTW),
        "fontFamily": FontFamily(fullConfigTW)
    }

    for (const [key, value] of Object.entries(ObjTW)) {
        for (var i = 0; i < value.length; i++) {
            dataPush.push(value[i])
        }
    }

    return dataPush
}