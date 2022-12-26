export const GridTemplateColumns = (fullConfigTW) => {

      var dataPush = []
      var prefix = "grid-cols-"

      for (var i = 1; i <= fullConfigTW.theme.gridTemplateColumns.max; i++) {

            dataPush.push(prefix + i)
   
         }
      return dataPush

}