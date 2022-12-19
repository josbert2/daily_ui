export const VerticalAlign = (fullConfigTW) => {
    var dataPush = []
    
    var prefix = "align-baseline"
    dataPush.push(prefix)
    prefix = "align-top"
    dataPush.push(prefix)
    prefix = "align-middle"
    dataPush.push(prefix)
    prefix = "align-bottom"
    dataPush.push(prefix)
    prefix = "align-text-top"
    dataPush.push(prefix)
    prefix = "align-text-bottom"
    dataPush.push(prefix)
    pref = 'align-sub'
    dataPush.push(pref)
    pref = 'align-super'
    dataPush.push(pref)

    return dataPush

}