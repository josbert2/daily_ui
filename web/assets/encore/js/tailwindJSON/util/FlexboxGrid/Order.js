export const Order = (fullConfigTW) => {
    var dataPush = []
    var prefixPosition = fullConfigTW.theme.order

    for (var i = 0; i < prefixPosition.length; i++) {
        dataPush.push("order-" + prefixPosition[i])
    }


}