export const Margin = (fullConfigTW) => {

    var dataPush = []
    var prefix = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my']


  
    for (var i = 0; i < prefix.length; i++) {
        var prefixPosition = fullConfigTW.theme.spacing
        var prefixPosition = Object.keys(prefixPosition).length;

        for (var j = 0; j < prefixPosition; j++) {
            console.log(prefix[i] + "-" + fullConfigTW.theme.spacing[j])
            dataPush.push(prefix[i] + "-" + prefixPosition[j])
        }
    }



    return dataPush
}