export const GridAutoColumns = (fullConfigTW) => {
   
     var dataPush = []
     var prefix = "auto-cols-"

     for (var i = 1; i <= fullConfigTW.theme.gridAutoColumns.max; i++) {

           dataPush.push(prefix + i)
  
        }
     return dataPush

}