export const Resize = (fullConfigTW) => {
   
      var dataPush = []
   
      var prefix = 'resize'
      var prefixPosition = ['none', 'y', 'x', '']
      var Space = fullConfigTW.theme.spacing
   
      for (var i = 0; i <  prefixPosition.length; i++) {
         dataPush.push(prefix + '-' + prefixPosition[i])
      }
            
      

      
      return dataPush
}