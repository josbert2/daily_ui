export const  clickElement = () => {
    const copyCss = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>'
    const deleteSvg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>'
    const getClass = (className) => {
        return className.getAttribute('class')
    }
    const setClassTw = (className) => {
        // init-config
        const classNameTW = className
        const classNameTWArray = classNameTW.split(' ')
        const classNameTWArrayLength = classNameTWArray.length
        const classNameTWArrayLengthMinusOne = classNameTWArrayLength - 1
        const classNameTWArrayLast = classNameTWArray[classNameTWArrayLengthMinusOne]
        const classNameTWArrayLastArray = classNameTWArrayLast.split('-')
        const classNameTWArrayLastArrayLength = classNameTWArrayLastArray.length
        const classNameTWArrayLastArrayLengthMinusOne = classNameTWArrayLastArrayLength - 1
        const classNameTWArrayLastArrayLast = classNameTWArrayLastArray[classNameTWArrayLastArrayLengthMinusOne]
        //document.querySelector('.init-config').innerHTML = ""
        document.querySelector('.class-linear-tw').innerHTML = ''
        for (let index = 0; index < classNameTWArrayLength; index++) {
           const element = classNameTWArray[index]
         
           if (element === 'hover-element-over' || element === 'click-element-over') {
              return false
           }
           var html = `<div class="px-2 class-row-tw flex delete-row items-center py-2 cursor-pointer text-gray-400 rounded-lg bg-opacity-10 text-sm hover:bg-gray-400 hover:bg-opacity-20"> <div class="class-css" >${element}</div>: <div class="ml-1 value-css text-"></div><div class="copy-css ml-auto cursor-pointer">${copyCss}</div><div class="delete-class-element">${deleteSvg}</div></div>`
           document.querySelector('.class-linear-tw').innerHTML += html
        }
     }
    var element = document.querySelector('*');
    element.addEventListener('click', function(event) {
       if (event.target.closest('.content-app-tw') !== null) {
          return false
       }
       if (document.querySelector('.click-element-over') == null) {
          event.target.classList.add('click-element-over')
          
          setClassTw(getClass(event.target))
          return false
       }
       setClassTw(getClass(event.target))
       document.querySelector('.click-element-over').classList.remove('click-element-over')
       event.target.classList.add('click-element-over')
    });
 }