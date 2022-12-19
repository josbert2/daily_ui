export const  Rotate  = (fullConfigTW) => {
      var dataPush = []
   
      var prefix = 'rotate'
      var prefixPosition = ['0', '1', '2', '3', '6', '12', '45', '90', '180', '270', '360']
   
      for (var i = 0; i <  prefixPosition.length; i++) {
         dataPush.push(prefix + '-' + prefixPosition[i])
      }
               
      
   
      return dataPush
   }