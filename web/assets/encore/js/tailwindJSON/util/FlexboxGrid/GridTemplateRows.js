export const GridTemplateRows = (fullConfigTW) => {
   
         var dataPush = []
         var prefix = "grid-rows-"
   
         for (var i = 1; i <= fullConfigTW.theme.gridTemplateRows.max; i++) {
   
               dataPush.push(prefix + i)
      
            }
         return dataPush
   
   }