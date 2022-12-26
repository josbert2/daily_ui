export const GridRowStartEnd = (fullConfigTW) => {

      var dataPush = []
      var prefix = ["row-span-", "row-start-", "row-end-"]
   
      for (var i = 1; i <= fullConfigTW.theme.gridTemplateRows.max; i++) {
         for (var j = 0; j < prefix.length; j++) {
               dataPush.push(prefix[j] + i)
         }
      }
   
      return dataPush
   
   }