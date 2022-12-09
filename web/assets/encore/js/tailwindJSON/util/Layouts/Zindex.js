export const zIndex = (fullConfigTW) => {
   var dataPush = []
   const prefixBreakpoint = [

   ]

  



   const name = 'z'
   for (const [key, value] of Object.entries(fullConfigTW.theme.zIndex)) {
      dataPush.push(name + '-' + key)
   } 

   for (var i = 0; i <  prefixBreakpoint.length; i++) {
       Object.entries(fullConfigTW.theme.zIndex).forEach(([key, value]) => {
         dataPush.push(prefixBreakpoint[i] + ':' + name + '-' + key)
       })
   }

   return dataPush
}