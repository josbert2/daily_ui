export const PlaceContent = (fullConfigTW) => {
    
   var dataPush = []
   var prefix = ["place-content"]
   var prefixPost = ["start", "end", "center", "between", "around", "evenly", "stretch"]

   
   for (var i = 0; i < prefix.length; i++) {
      for (var j = 0; j < prefixPost.length; j++) {
         dataPush.push(prefix[i] + "-" + prefixPost[j])
      }
   }

   return dataPush


    
}