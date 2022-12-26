export const GridColumnsStarEnd = (fullConfigTW) => {
      var dataPush = []
      var prefix = ["col-span-", "col-start-", "col-end-"]

      for (var i = 1; i <= fullConfigTW.theme.gridTemplateColumns.max; i++) {
            for (var j = 0; j < prefix.length; j++) {
                  dataPush.push(prefix[j] + i)
            }
         }
         

      
   
   
      return dataPush
   
   }