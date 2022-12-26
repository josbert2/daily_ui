export const GridAutoRows = (fullConfigTW) => {
      var dataPush = []
      var prefix = "auto-rows-"
   
      for (var i = 1; i <= fullConfigTW.theme.gridAutoRows.max; i++) {
   
         dataPush.push(prefix + i)
   
      }
      return dataPush
   
   }