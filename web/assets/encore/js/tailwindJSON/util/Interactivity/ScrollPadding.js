export const ScrollPadding = (fullConfigTW) => {

   var dataPush = []

   var prefix = 'scroll'
   var prefixPosition = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl']
   var Space = fullConfigTW.theme.spacing

   for (var i = 0; i <  prefixPosition.length; i++) {
      for (const [key, value] of Object.entries(Space)) {
         dataPush.push(prefix + '-' + prefixPosition[i] + '-' + key)
      }
   }
         

   
   return dataPush
}