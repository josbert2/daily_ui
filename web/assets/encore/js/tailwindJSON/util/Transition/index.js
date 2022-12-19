import { Animation } from "./Animation"
import { Delay } from "./Delay"
import { Durations } from "./Durations"
import { TimeFunction } from "./TimeFunction"
import { TransitionsPropery } from "./TransitionsPropery"

export const Transition = (fullConfigTW) => {
      var dataPush = []
      var fullConfigTWMain = fullConfigTW
   
      const ObjTW = {
         "Animation": Animation(fullConfigTWMain),
         "Delay": Delay(fullConfigTWMain),
         "Durations": Durations(fullConfigTWMain),
         "TimeFunction": TimeFunction(fullConfigTWMain),
         "TransitionsPropery": TransitionsPropery(fullConfigTWMain),
      }
   
      for (const [key, value] of Object.entries(ObjTW)) {
     
         for (var i = 0; i < value.length; i++) {
               dataPush.push(value[i])
         }
      }
   
      return dataPush
}