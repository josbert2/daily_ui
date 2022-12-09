export const AspectRatio = (fullConfigTW) => {
   var dataPush = []
   var fullConfigTWMain = fullConfigTW

   const prefiexTailwind = [
         'sm:',
         'h',
   ]
   const prefixBreakpoint = [
   
   ]
   
   const arrayListClassTailwind = {
         'aspectRatio': 'aspect',
         'columns': 'columns',
         'break-after': 'break-after',
   }


   const name = 'aspectRatio'
   for (var i = 0; i <  prefiexTailwind.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTWMain.theme.aspectRatio)) {
         dataPush.push(arrayListClassTailwind[name] + '-' + prefiexTailwind[i] + '-' + key)
      } 
   }

   return dataPush
}

