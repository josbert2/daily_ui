export const textColor = (fullConfigTW, data) => {
    var prefixBreakpoint = []
    Object.entries(fullConfigTW.theme.screens).forEach(([key, value]) => {
        const screen = key
        const screenValue = value
     
        prefixBreakpoint.push(screen)
    })
    var dataPush = []
    Object.entries(fullConfigTW.theme.colors).forEach(([keys, value]) => {
        if (typeof value === 'string') {
            prefixBreakpoint.forEach((screen) => {
                data.push(
                    screen + ':text-' + keys
                )
            })
            data.push('text-' + keys)
        }
        if (typeof value === 'object') {
            Object.entries(value).forEach(([key, value], index) => {
                
                prefixBreakpoint.forEach((screen) => {
                    data.push(
                        screen + ':text-' + keys + '-' +  key
                    )
                })
                data.push('text-' + keys + '-' +  key)
            })
        }
    })
    return dataPush
}