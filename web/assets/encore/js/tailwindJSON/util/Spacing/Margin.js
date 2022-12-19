export const Margin = (fullConfigTW) => {

    var dataPush = []
    var prefix = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my']

    for (var i = 0; i < prefix.length; i++) {
        var prefixPosition = fullConfigTW.theme.spacing
        for (var j = 0; j < prefixPosition.length; j++) {
            dataPush.push(prefix[i] + "-" + prefixPosition[j])
        }
    }

    return dataPush
}