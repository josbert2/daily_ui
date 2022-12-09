export const Display = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'hidden']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}