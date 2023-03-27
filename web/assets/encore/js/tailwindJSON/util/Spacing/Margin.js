export const Margin = (fullConfigTW) => {

    var dataPush = []
    var prefix = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my']


    console.log(fullConfigTW.theme.spacing )
    for (var i = 0; i <  prefix.length; i++) {
        for (const [key, value] of Object.entries(fullConfigTW.theme.spacing)) {
           dataPush.push(prefix[i] + '-' + key)
        } 
     }



    return dataPush
}