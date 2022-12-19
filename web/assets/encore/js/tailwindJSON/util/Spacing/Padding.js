export const Padding = (fullConfigTW) => {
    var dataPush = []
    const prefix = ['p', 'px', 'py', 'pt', 'pb', 'pl', 'pr']
    const name = 'padding'
    for (var i = 0; i <  prefix.length; i++) {
       for (const [key, value] of Object.entries(fullConfigTW.theme.spacing)) {
          dataPush.push(prefix[i] + '-' + key)
       } 
    }
 
    return dataPush
  
 
 }