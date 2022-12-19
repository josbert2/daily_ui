export const MaxHeight = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['max-h']
    for (var i = 0; i <  prefix.length; i++) {
      for (const [key, value] of Object.entries(fullConfigTW.theme.maxHeight)) {
         dataPush.push(prefix[i] + '-' + key)
      }
    }

   return dataPush
}
