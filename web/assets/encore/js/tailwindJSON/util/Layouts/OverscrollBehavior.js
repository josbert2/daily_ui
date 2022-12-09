export const OverscrollBehavior = (fullConfigTW) => {
   var dataPush = []

   const prefix = ['overscroll-auto', 'overscroll-contain', 'overscroll-none', 'overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none', 'overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none']
   for (var i = 0; i <  prefix.length; i++) {
      dataPush.push(prefix[i])
   }

   return dataPush
}