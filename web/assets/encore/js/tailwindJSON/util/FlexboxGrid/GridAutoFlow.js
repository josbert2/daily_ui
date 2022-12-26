export const GridAutoFlow = (fullConfigTW) => {
      var dataPush = []
      var prefix = "grid-flow-"
      var prefixPosition = ["col", "row", "dense", "col dense", "row dense"]
   
      for (var i = 0; i < prefixPosition.length; i++) {
         dataPush.push(prefix + prefixPosition[i])
      }
      
   
      return dataPush
   
   }