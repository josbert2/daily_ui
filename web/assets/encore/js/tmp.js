import tailwindConfig from '../../../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { dragElement } from './vendor/dragElements'
import { clickElement } from './vendor/clickElement'
import { addE } from './vendor/addEvento'
import { hoverElement } from './vendor/hoverElement'
import  { disabledEnabled }  from './vendor/disabledEnabled'
import { v1 as uuidv1 } from 'uuid';
import { textColor } from './tailwindJSON/textColor'
import { data } from 'autoprefixer'


import { mainMasterData } from './tailwindJSON/index'


import { Colors } from './tailwindJSON/util/Colors'


// Prefijos para la composicin del plugin

const prefiexTailwind = [
    'sm:',
    'h',
]
const prefixBreakpoint = [

]

const arrayListClassTailwind = {
    'aspectRatio': 'aspect',
    'columns': 'columns',
    'break-after': 'break-after',
}

var prefixColors = 'bg-'
var arrayPrefixColors = [

]

function getObjectTailwind(arr){
    Object.entries(arr.theme).forEach(([key, value]) => {
        if (arrayListClassTailwind[key]) {
            Object.entries(value).forEach(([val]) => {
             
            })
        }
    })
}


var dataMaster = []
 





 
 
 
 const fullConfigTW = resolveConfig(tailwindConfig)
 const userConfigTW = tailwindConfig



 
 getObjectTailwind(fullConfigTW)
 




/*// Get Aspect Ratio
Object.entries(fullConfigTW.theme.aspectRatio).forEach(([key, value]) => {
    dataMaster.push(arrayListClassTailwind['aspectRatio'] + '-' + key)
})
// Get Container
Object.entries(fullConfigTW.theme.container).forEach(([key, value]) => {

})
// Get columns
Object.entries(fullConfigTW.theme.columns).forEach(([key, value]) => {
    dataMaster.push(arrayListClassTailwind['columns'] + '-' + key)
}) */





 //dataMaster.push(textColor(fullConfigTW, dataMaster))
 Object.entries(fullConfigTW.theme.colors).forEach(([keys, value]) => {
 
     if (typeof value === 'string') {
         dataMaster.push('bg-' + keys)
     }
     if (typeof value === 'object') {
        
         Object.entries(value).forEach(([key, value], index) => {
             dataMaster.push('bg-' + keys + '-' +  key)
         })
    
     }
 })
 
 
 
 
 Object.entries(fullConfigTW.theme.screens).forEach(([key, value]) => {
    const screen = key
    const screenValue = value
 
    prefixBreakpoint.push(screen)
  })
 
 
  
 
 
 function addEvent(parent, evt, selector, handler) {
    parent.addEventListener(evt, function(event) {
      if (event.target.matches(selector + ', ' + selector + ' *')) {
        handler.apply(event.target.closest(selector), arguments);
      }
    }, false);
  }
 
 
 
 
 
 
 
 
 
 const dev = true
 const initButton = document.querySelector('.init-config')
 const arrowDown = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>'
 const copyCss = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>'
 const deleteSvg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>'
 
 
 //input-tw-search
 
 
 const templateHtml = (text) => {
    var htmlParent = document.createElement('div')
    htmlParent.classList.add('container-wrapper-config')
    htmlParent.setAttribute('dataid', 'container-' + text + '')
    htmlParent.innerHTML = '<span class="flex items-center">' + text + ' <div class="ml-auto">' + arrowDown  + '</div></span>'
    htmlParent.innerHTML += '<div class="content-config"></div>'
    document.querySelector('.ContenthtmlParent').appendChild(htmlParent)
   
 }
 
 
 //JSON 
 var dataColor = ['#d63031', '#d63031', '#6c5ce7', '#e84393', '#fdcb6e', '#00b894', '#0984e3']
 
 
 
 
 const space = () => {
    let index = 0;
    templateHtml('space')
    for (const [key, value] of Object.entries(fullConfigTW.theme.spacing)) {
       if (index === 0) {
          var mt = 'mt-3'
       }else{
          var mt = ''
       }
       var html = `<div class="px-2 class-row-tw flex items-center py-2 cursor-pointer text-gray-400 rounded-lg bg-opacity-10 text-sm hover:bg-gray-400 hover:bg-opacity-20      ${mt}"> <div class="class-css" data-classTW="m-${key}">m-${key}</div>: <div class="ml-1 value-css text-">${value}</div><div class="copy-css ml-auto cursor-pointer">${copyCss}</div></div>`
    
       document.querySelector('.content-config').innerHTML += html
       index++
    } 
 }
 
 
function get500Colores(value){
    var middleColor = ''
    if (typeof value === 'string') {
        middleColor = value
    }
    if (typeof value === 'object') {
        Object.entries(value).forEach(([key, value], index) => {
            if (key === '500') {
                middleColor = value
            }
        })
    }
    return middleColor
}



 function ColoresHtml(){
    var html = ''
    var colorsSort = []
    var container = document.querySelector('.content-color-app')

    Object.entries(fullConfigTW.theme.colors).forEach(([keys, valueColor]) => {
        var middleColor = get500Colores(valueColor)
       
        var idContainerColores = 'container-' + keys

      
        var divContainerCategoria = document.createElement('div')
        divContainerCategoria.setAttribute('id', idContainerColores)
        divContainerCategoria.classList.add('container-wrapper-config-colors-opacity')
        divContainerCategoria.innerHTML = '<div class="container-wrapper-config-colors"><div class="flex items-center px-3"><div style="background:' + middleColor + '" class=" w-4 h-4 rounded-md mr-3"></div><span class="show-element-hover">' + keys + '</span>  <div class="ml-auto">' + arrowDown  + '</div></div></div>'
        container.appendChild(divContainerCategoria)

        var divContainerContent = document.createElement('div')
        divContainerContent.classList.add('content-config-colors')
        divContainerContent.setAttribute('dataid', idContainerColores)

        

        var coloresMarker = document.createElement('div')
        coloresMarker.classList.add('colores-marker')


        if (typeof valueColor === 'string') {
            coloresMarker.innerHTML = valueColor
            document.querySelector('#' + idContainerColores).appendChild(coloresMarker)
        }else{
            if (typeof valueColor === 'object') {
                var dataColor = []
                var dataKey = []
                Object.entries(valueColor).forEach(([key, value], index) => {
                    dataColor.push(value)
                    dataKey.push(keys + '-' + key)
                })

                var divColor = document.createElement('div')
                    divColor.innerHTML = '<div class="flex items-center py-3 gap-2" id="color-main-' + idContainerColores + '"></div>'
                    document.querySelector('#' + idContainerColores).appendChild(divColor)


                Object.entries(dataColor).forEach(([key, value], index) => {
                    const div = document.createElement('div');
            
                    div.innerHTML = '<div data-color-main="' + dataKey[index] + '" data-color="'+ value +'" class="w-5 h-5 rounded trigger-color-click scale hover:scale-110 border-2 transition-all  border-transparent hover:border-gray-500" style="background:'+ value +'"></div>'
                    document.querySelector('#color-main-' + idContainerColores).appendChild(div)
                })
            }
        }
            /*document.querySelector('.container-wrapper-config-colors').appendChild(divContainerContent) */
    })
   
    //document.querySelector('.content-color-app').innerHTML = html
}


 


 function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
 var copyClass = []
 
 Array.prototype.remove = function() {
     var what, a = arguments, L = a.length, ax;
     while (L && this.length) {
         what = a[--L];
         while ((ax = this.indexOf(what)) !== -1) {
             this.splice(ax, 1);
         }
     }
     return this;
 };
 const copyToClipboardWebpack = str => {
    
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
 
 addEvent(document, 'click', '.copy-class', function(e) {
    var newClass = "" 
    for (var i = 0; i <  copyClass.length; i++) {
       newClass += copyClass[i] + ' '
    }
 
       copyToClipboardWebpack(newClass.replace('undefined', ''));
 
 })
 
 addEvent(document, 'click', '.delete-class', function(e) {
    var classE =  e.target.closest('.selected-item').getAttribute('data-class-select')
    
    document.querySelector('.click-element-over').classList.remove(classE)
    e.target.closest('.selected-item').remove()
 
    copyClass.remove(classE)
    var newClass = "" 
    for (var i = 0; i <  copyClass.length; i++) {
       newClass += copyClass[i] + ' '
    }
    var unid = document.querySelector('.selected-class').getAttribute('unid')
    var classToRemove = document.getElementById(unid).getAttribute('data-class')
    /*  
    var checkComma = classToRemove.slice(-1, classToRemove.length)
 
    if (checkComma === ',') {
         classToRemove = classToRemove.replace(',', '')
    } 
    classToRemove = classToRemove.replace(classE, '') */
    if (classToRemove.indexOf(classE + ',') >= 0) {
         classToRemove = classToRemove.replace(classE + ',', '')
    }else{
         classToRemove = classToRemove.replace(classE, '')
    }
 
    document.getElementById(unid).setAttribute('data-class', classToRemove)
 
    

 
    copyToClipboardWebpack(newClass.replace('undefined', ''));
 
   
 })
 
 
 addEvent(document, 'click', '.select-item', function(e) {
 
 
 
 
 
 
    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector(".search-input input");
    const suggBox = searchWrapper.querySelector(".autocom-box");
    var selectData = e.target.getAttribute("data-value");
    searchWrapper.classList.remove("active");
    var selectFor = document.querySelectorAll('.selected-item')
   
     for (var i = 0; i <  selectFor.length; i++) {
       if (selectFor[i].getAttribute('data-class-select') === selectData) {
         break;
       
       }
    }
 
         
 
 
 
    var span = document.createElement("span");
    span.classList.add('selected-item')
    span.classList.add('relative')
 
    var semiColor = ''
 
    
    prefixBreakpoint.forEach((prefix) => {
         
         if (selectData.indexOf(prefix + ':') >= 0) {
             var edited = "{";
             for (var i = 0; i < dataColor.length; i++) {
                 edited += '"'+prefixBreakpoint[i]+'":"'+dataColor[i]+'",';
             }
             edited = edited.substring(0, edited.length-1) + "}";
             var color = JSON.parse(edited)
             color = color[prefix]
          
             semiColor = '<div class="flex items-center"><span style="color:' + color  + '">' + prefix + ':'  + '</span><span>' +  selectData.replace(prefix + ':', '') + '</span></div>'
 
         }
    })
 
    if (semiColor === '') {
       semiColor = selectData
    }
 
 
    span.setAttribute('data-class-select', selectData)
    span.innerHTML = semiColor + '<span class="absolute cursor-pointer top-2/4 right-1 transform -translate-y-2/4 delete-class"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></span>';
  
   
    
 
    document.querySelector('.selected-class').appendChild(span) 
    
    copyClass.push(selectData.replace('undefined', ''))
    checkClassSelected()
    document.querySelector('.click-element-over').classList.add(selectData)
 
    if (document.querySelector('.fixed-click-element-over.click-element-over') !== null) {
       var uuii = document.querySelector('.fixed-click-element-over.click-element-over').getAttribute('unid')
       var dataArrayClass = ''
   
       if (copyClass.length == 1){
             dataArrayClass += copyClass[0]
       }else{
         for(var i = 0; i <  copyClass.length; i++) {
             dataArrayClass += copyClass[i] + ','
         }
         dataArrayClass = dataArrayClass.replace(/,\s*$/, "");
       }
       //document.getElementById(uuii).setAttribute('data-class', dataArrayClass)
       
    }
    document.querySelector('.search-input input').value = ''
  
 
 });
 
 addEvent(document, 'click', '.move-inspect', function(e){
   
     if (e.target.closest('.move-inspect').getAttribute('data-position') == 'left') {
         document.querySelector('.content-app-tw').style.right = '25px'
         document.querySelector('.content-app-tw').style.left = 'auto'
         e.target.closest('.move-inspect').querySelector('svg').style.transform = 'rotate(180deg)'
         e.target.closest('.move-inspect').setAttribute('data-position', 'right')
     }else{
         document.querySelector('.content-app-tw').style.setProperty('left', '25px', 'important');
         document.querySelector('.content-app-tw').style.right = ''
         e.target.closest('.move-inspect').querySelector('svg').style.transform = 'rotate(0deg)'
         e.target.closest('.move-inspect').setAttribute('data-position', 'left')
     }
 })
 addEvent(document, 'click', '.disabled-move', function(e){
     document.querySelector('.content-app-tw').classList.toggle('block-drag')
 })
 
 
 
 
 
 
 addEvent(document, 'click', '.close-inspector', function(e) {
     document.querySelector('.content-app-tw').remove()
 });
 
 
 
 var indexSelect = 0;
 const searchClass = (dataMaster) => {
     var simulateClick = function(elem) {
         // Create our event (with options)
         var evt = new MouseEvent('click', {
             bubbles: true,
             cancelable: true,
             view: window
         });
         //evt.initEvent ('mouseup', true, true);
         // If cancelled, don't dispatch our event
         //var canceled = !elem.dispatchEvent(evt);
     };
     const attributeTailwind = {
         'height': 'h',
         'width': 'w',
         'min-height': 'min-h',
         'min-width': 'min-w',
         'max-height': 'max-h',
         'max-width': 'max-w',
         'margin': 'm',
         'margin-top': 'mt',
         'margin-right': 'mr',
         'margin-bottom': 'mb',
         'margin-left': 'ml',
         'padding': 'p',
         'padding-top': 'pt',
         'padding-right': 'pr',
         'padding-bottom': 'pb',
         'padding-left': 'pl',
         'border': 'b',
         'border-top': 'bt',
         'border-right': 'br',
         'border-bottom': 'bb',
         'border-left': 'bl',
         'border-radius': 'rounded',
         'border-top-left-radius': 'rounded-tl',
         'border-top-right-radius': 'rounded-tr',
         'border-bottom-left-radius': 'rounded-bl',
         'border-bottom-right-radius': 'rounded-br',
         'border-style': 'border-style',
         'border-width': 'border-width',
         'border-color': 'border-color',
 
 
     }
 
     document.getElementById('input-tw-search').addEventListener('click', function(e) {
         e.preventDefault()
         this.focus()
     })
 
 
 
    
 
     // getting all required elements
     const searchWrapper = document.querySelector(".search-input");
     const inputBox = searchWrapper.querySelector(".search-input input");
     const suggBox = searchWrapper.querySelector(".autocom-box");
     const icon = searchWrapper.querySelector(".icon");
     let linkTag = searchWrapper.querySelector("a");
     let webLink;
 
     // if user press any key and release
     inputBox.onkeyup = (e) => {
        if (e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 13) {
            let userData = e.target.value; //user enetered data
            let emptyArray = [];
            if (userData) {
    
                emptyArray = dataMaster.filter((data) => {
                    //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                    return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
                });
                emptyArray = emptyArray.map((data) => {
                    // passing return data inside li tag
                    return data = '<li>' + data + '</li>';
                });
                searchWrapper.classList.add("active"); //show autocomplete box
                showdataMaster(emptyArray);
                let allList = suggBox.querySelectorAll("li");
                for (let i = 0; i < allList.length; i++) {
                    //adding onclick attribute in all li tag
                    //allList[i].setAttribute("onclick", "select(this)");
                    
                    allList[i].classList.add("select-item");
                    allList[i].setAttribute("data-value", allList[i].innerHTML);
                    if (allList[i].textContent.indexOf('bg-') > -1) {
                        var span = document.createElement('span')
                        var clases = allList[i].textContent
                        span.classList.add(clases, 'w-3', 'h-3', 'rounded', 'flex', 'ml-auto')
                        allList[i].appendChild(span);
                    }
    
                }
            } else {
                searchWrapper.classList.remove("active"); //hide autocomplete box
            }
        }else{
            if (e.keyCode == 40) {
                indexSelect++
                if (indexSelect >= document.querySelectorAll('.select-item').length) {
                    indexSelect = 0
                }

                const selectItem = document.querySelectorAll('.select-item')
                selectItem.forEach((item, index) => {
                    item.classList.remove('active')
                })

                var dataSelected = document.querySelectorAll('.select-item')[indexSelect].getAttribute('data-value')
                document.querySelector('#input-tw-search').value = dataSelected

                
                document.querySelectorAll('.select-item')[indexSelect].classList.add('active')
                document.querySelectorAll('.select-item')[indexSelect].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            }else if (e.keyCode == 38) {
                indexSelect--
                if (indexSelect < 0) {
                    indexSelect = document.querySelectorAll('.select-item').length - 1
                }

               

                const selectItem = document.querySelectorAll('.select-item')
                selectItem.forEach((item, index) => {
                    item.classList.remove('active')
                })

                var dataSelected = document.querySelectorAll('.select-item')[indexSelect].getAttribute('data-value')
                
                document.querySelector('#input-tw-search').value = dataSelected

                document.querySelectorAll('.select-item')[indexSelect].classList.add('active')
                document.querySelectorAll('.select-item')[indexSelect].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            }else if (e.keyCode == 13) {
                document.querySelectorAll('.select-item')[indexSelect].click()
            }

        }
 
     }
 
     document.getElementById('input-tw-search').addEventListener('keydown', function(e) {
         if (e.which === 38 || e.which === 40) {
             e.preventDefault();
             
         }
     });
 
     document.onkeydown = checkKey;
    
 
     document.onkeyup = checkKeypress
 
    
     function checkKeypress(e) {
         document.getElementById('input-tw-search').addEventListener('keydown', function(e) {
             if (e.which === 38 || e.which === 40) {
                 e.preventDefault();
             }
         });
         e = e || window.event;
        
         if (e.keyCode == '40') {
            
            

            /*document.querySelectorAll('.select-item')[indexSelect].classList.add('active');
            var data = document.querySelectorAll('.select-item')[indexSelect].getAttribute('data-value')
            document.getElementById('input-tw-search').value = data
            if (indexSelect <= document.querySelectorAll('.select-item').length) {
                 indexSelect++;
            } else {
 
            } */
         }
 
         if (e.keyCode == '38') {
 
             /*if (indexSelect == 0) {
                 indexSelect = 0;
             } else {
                 indexSelect--;
             }
 
             document.querySelector('.select-item').classList.remove('active');
             document.querySelectorAll('.select-item')[indexSelect].classList.add('active'); */
 
         }
         
         if (e.keyCode == '13') {
            
            
         }
 
     }
 
     function checkKey(e) {
 
         e = e || window.event;
 
         if (e.keyCode == '13') {
          
             var someLink = document.querySelector('.select-item.active')
 
             simulateClick(someLink);
                if (document.querySelector('#input-tw-search').value != '') {
                    var span = document.createElement("span");
                    var cssSelect = document.querySelector('#input-tw-search').value
                    span.classList.add('selected-item')
                    span.classList.add('relative')
                    span.setAttribute('data-class-select', cssSelect)
                    span.innerHTML = cssSelect + '<span class="absolute cursor-pointer top-2/4 right-1 transform -translate-y-2/4 delete-class"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></span>';
                    document.querySelector('.selected-class').appendChild(span) 
                    copyClass.push(cssSelect.replace('undefined', ''))
                    document.querySelector('.click-element-over').classList.add(cssSelect)
        
                    indexSelect == 0
                    document.querySelector('.autocom-box').innerHTML = '';
                    document.querySelector('#input-tw-search').value = '';
                    document.querySelector('.search-input').classList.remove('active');
                }
 
             indexSelect == 0
             document.querySelector('.autocom-box').innerHTML = '';
             document.querySelector('#input-tw-search').value = '';
             document.querySelector('.search-input').classList.remove('active');
         }
 
         if (e.keyCode == '38') {
             // up arrow
         } else if (e.keyCode == '40') {
 
         } else if (e.keyCode == '37') {
             // left arrow
         } else if (e.keyCode == '39') {
             // right arrow
         }
 
     }
 
 
 
 
     function showdataMaster(list) {
         let listData;
         if (!list.length) {
             var userValue = inputBox.value;
             listData = '<li>' + userValue + '</li>';
         } else {
             listData = list.join('');
         }
         suggBox.innerHTML = listData;
 
 
     }
 
     document.getElementById('input-tw-search').addEventListener('keyup', function(e) {
         if (e.target.value === '') {
             indexSelect = 0;
             document.querySelector('.autocom-box').innerHTML = '';
         }
 
     })
 
 
 }
 
 
 
 //-------------
 
 
 
 var cssFile = document.createElement('link');
     cssFile.rel = 'stylesheet';
     cssFile.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap";  // or path for file {themes('/styles/mobile.css')}
     document.head.appendChild(cssFile);
 
 const html = `
 <div class="content-app-tw block-drag aspect-1" id="mydiv">
             <div id="mydivheader" class="flex flex-col overflow-hidden content-app-wrapper h-100">
                 <nav class="flex items-center h-16 px-4 pt-4 text-gray-300 rounded-lg">
                     <div class=" bg-gray-100 rounded-lg bg-opacity-5">
                         <button title="Move to left" data-position='left' class="p-2 rounded-lg hover:text-white move-inspect">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                             </svg>
                         </button>
                         <button class="p-2 rounded-lg text-primary disabled-move" title="Pause">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                             </svg>
                         </button>
                         <button class="p-2 hidden rounded-lg hover:text-white" title="Show grid">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                 <path fill="none" d="M0 0h24v24H0z"></path>
                                 <path d="M14 10h-4v4h4v-4zm2 0v4h3v-4h-3zm-2 9v-3h-4v3h4zm2 0h3v-3h-3v3zM14 5h-4v3h4V5zm2 0v3h3V5h-3zm-8 5H5v4h3v-4zm0 9v-3H5v3h3zM8 5H5v3h3V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></path>
                             </svg>
                         </button>
                     </div>
                     <div class="flex-grow"></div>
                     <a href="https://github.com/kholid060/inspect-css" class="hidden mr-4" target="_blank" title="GitHub">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                             <path fill="none" d="M0 0h24v24H0z"></path>
                             <path
                                 d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                             ></path>
                         </svg>
                     </a>
                     <button title="Close extension" class="close-inspector">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                             <path fill="none" d="M0 0h24v24H0z"></path>
                             <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                         </svg>
                     </button>
                 </nav>
                 <div class="flex-1 py-2 my-2 overflow-auto scroll scroll-main ">
                     <div class="px-4 init-config scroll data-content-tab active" data-content-tab="p1">
                         <div class="flex w-full gap-2 px-1 py-1 bg-gray-100 rounded-full bg-opacity-5">
                             <button data-id="live" class="w-full decorate-btn px-2 py-2 rounded-full cursor-pointer tab-tw-inspect-btn active-tab-selector btn-tw-class generate-text">Live</button>
                             <button data-id="preview" class="w-full px-2 py-2 rounded-full cursor-pointer tab-tw-inspect-btn btn-tw-class generate-text decorate-btn">Preview</button>
                             
                         </div>
                         <div class="overflow-auto live-editor-tw scroll">
                             <div data-id="live" class="class-linear-tw tab-tw-inspect-content active-tw-content open">
                               <div class="h-full w-full flex justify-center items-center text-xs text-center pt-10 text-gray-300">
                                  Haz click en el elemento que quieras ver sus clases y editarlas
                               </div>
                             </div>
                             <div data-id="preview" class="tab-tw-inspect-content">
                                 <div class="search-input">
                                     <a href="" target="_blank" hidden></a>
                                     <input type="text" placeholder="Type to search.." id="input-tw-search"  class="w-full px-3 py-4 mt-5 bg-gray-900 border-0 rounded-lg input-tw-search">
                                     <div class="autocom-box">
                                     <!-- here list are inserted from javascript -->
                                     </div>
                                     <div class="px-3 py-3 selected-class">
                                     </div>
                                     <div class=" px-10">
                                         <button class="w-full  copy-class generate-button">
                                            <svg class="icon-bu" viewBox="0 0 24 26">
                                                <path
                                                d="M5.16515 2.62145L5.8075 0.999247C5.83876 0.919722 5.9154 0.866699 6.00112 0.866699C6.08683 0.866699 6.16347 0.919722 6.19473 0.999247L6.83708 2.62145L8.44145 3.27094C8.5201 3.30254 8.57254 3.38003 8.57254 3.4667C8.57254 3.55337 8.5201 3.63085 8.44145 3.66246L6.83708 4.31195L6.19473 5.93415C6.16347 6.0147 6.08683 6.0667 6.00112 6.0667C5.9154 6.0667 5.83876 6.0147 5.8075 5.93415L5.16515 4.31195L3.56078 3.66246C3.48112 3.63085 3.42969 3.55337 3.42969 3.4667C3.42969 3.38003 3.48112 3.30254 3.56078 3.27094L5.16515 2.62145Z"
                                                />
                                                <path
                                                d="M11.2362 9.43967C11.5502 9.30067 11.8015 9.05025 11.9405 8.73617L13.5494 5.11725C13.7169 4.74204 14.0887 4.5 14.5 4.5C14.9112 4.5 15.2839 4.74204 15.4506 5.11725L17.0603 8.73617C17.1985 9.05025 17.4497 9.3015 17.7638 9.43967L21.3827 11.0494C21.7579 11.2161 22 11.5887 22 12C22 12.4112 21.7579 12.7831 21.3827 12.9506L17.7638 14.5595C17.4497 14.6985 17.1993 14.9497 17.0603 15.2638L15.4506 18.8827C15.2839 19.2579 14.9112 19.5 14.5 19.5C14.0887 19.5 13.7169 19.2579 13.5494 18.8827L11.9405 15.2638C11.8015 14.9497 11.5502 14.6985 11.2362 14.5595L7.61725 12.9506C7.24204 12.7831 7 12.4112 7 12C7 11.5887 7.24204 11.2161 7.61725 11.0494L11.2362 9.43967Z"
                                                />
                                                <path
                                                d="M4.60728 19.392L5.67703 16.6875C5.72997 16.5541 5.85854 16.4666 6.00056 16.4666C6.14258 16.4666 6.27031 16.5541 6.32325 16.6875L7.39299 19.392L10.0678 20.4736C10.1997 20.5271 10.2863 20.6563 10.2863 20.7999C10.2863 20.9435 10.1997 21.0735 10.0678 21.1271L7.39299 22.2087L6.32325 24.9123C6.27031 25.0457 6.14258 25.1332 6.00056 25.1332C5.85854 25.1332 5.72997 25.0457 5.67703 24.9123L4.60728 22.2087L1.93333 21.1271C1.8014 21.0735 1.71484 20.9435 1.71484 20.7999C1.71484 20.6563 1.8014 20.5271 1.93333 20.4736L4.60728 19.392Z"
                                                />
                                            </svg>
                                            <span>Copy class</span>
                                         </button>
                                     </div>
                                     <div class="icon"><i class="fas fa-search"></i></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="data-content-tab px-4 " data-content-tab="p2">
                        <h2 class="mb-2"Configuración color</h2>
                        <div class="variant-pciker flex items-center">
                            <div>
                                <label for="change-option-bg">
                                    <input type="radio" id="change-option-bg" value="bg-" name="radio"  class="bg-color-picker">
                                    <span>bg-
                                    <div class="check-radio absolute scale-0 top-2/4 left-[7px] -translate-y-2/4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-green-500 w-4 h-4 ">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    </span>
                                    
                                </label>
                            </div>
                            <div>
                                <label for="change-option-text">
                                    <input type="radio" id="change-option-text" value="text-" name="radio"  class="bg-color-picker">
                                    <span>text-
                                        <div class="check-radio absolute scale-0 top-2/4 left-[7px] -translate-y-2/4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-green-500 w-4 h-4 ">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </span>
                                    
                                    
                                </label>
                            </div>
                            <div>
                                <label for="change-option-border">
                                    <input type="radio" id="change-option-border" name="radio" value="border-"  class="bg-color-picker">
                                    <span>border-
                                        <div class="check-radio absolute scale-0 top-2/4 left-[7px] -translate-y-2/4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-green-500 w-4 h-4 ">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </span>
                                    
                                </label>
                            </div>
                            
                        </div>

                        <h2 class="mb-2">Colores pickers</h2>
                        
                        <div class="content-color-app">

                        </div>

                     </div>
                     <div class="ContenthtmlParent">
                     </div>
                 </div>
                 <div class="flex items-center gap-5 flex-shrink-0 footer-gap-main w-full h-16 px-4 text-gray-300  rounded-b border-[#1d1d1d]  ">
                     <button data-tab="p1" role="button" class="active app-buttons relative p-2 transition  rounded-lg ui-button  text-primary" title="Properties">
                         <span class="flex items-center justify-center h-full">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                 <path fill="none" d="M0 0h24v24H0z"></path>
                                 <path
                                     d="M13 1l.001 3.062A8.004 8.004 0 0 1 19.938 11H23v2l-3.062.001a8.004 8.004 0 0 1-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 0 1-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0 1 11 4.062V1h2zm-1 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                                 ></path>
                             </svg>
                         </span>
                         
                     </button>

                     <button data-tab="p2" role="button" class="app-buttons relative p-2 transition  rounded-lg ui-button  text-primary" title="Properties">
                         <span class="flex items-center justify-center h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                            </svg>
                           
                         </span>
                         
                     </button>
                     
                     <button role="button" class="relative  p-2 transition transition-colors rounded-lg ui-button hover:text-white" title="Attributes">
                         <span class="flex items-center justify-center h-full">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             </svg>
                         </span>
                         <!---->
                     </button>
                     <button role="button" class="relative hidden p-2 transition transition-colors rounded-lg ui-button hover:text-white" title="Custom CSS">
                         <span class="flex items-center justify-center h-full">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                 <path fill="none" d="M0 0h24v24H0z"></path>
                                 <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path>
                             </svg>
                         </span>
                         <!---->
                     </button>
                     <button role="button" class="relative hidden p-2 transition transition-colors rounded-lg ui-button hover:text-white" title="Graphic Assets">
                         <span class="flex items-center justify-center h-full">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                 <path fill="none" d="M0 0h24v24H0z"></path>
                                 <path
                                     d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                 ></path>
                             </svg>
                         </span>
                         <!---->
                     </button>
                     <button role="button" class="relative hidden p-2 transition transition-colors rounded-lg ui-button hover:text-white" title="Palettes">
                         <span class="flex items-center justify-center h-full">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                 <path fill="none" d="M0 0h24v24H0z"></path>
                                 <path
                                     d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                 ></path>
                             </svg>
                         </span>
                         <!---->
                     </button>
                 </div>
             </div>
         </div>
 `
 
 const createClassUnid = (id) => {
     var classUnid = document.createElement('div');
     var idu = id;
     classUnid.className = 'classUnid';
     classUnid.id = idu;
     if (document.querySelector('.fixed-click-element-over') !== null){
         var unid = document.querySelector('.fixed-click-element-over').getAttribute('unid')
     
         for (var i = 0; i < copyClass.length; i++) {
             if (copyClass.length != 0){
                 document.querySelector('.classUnid[id="'+unid+'"]').setAttribute('data-class', copyClass[i]);
             }
         }
             
     }
    
     
     document.querySelector('html').appendChild(classUnid)
 }
 
 const checkClassSelected = (className) => {
 
     var id = uuidv1()
     if (document.querySelector('.fixed-click-element-over.click-element-over') != null)
     {
        
 
         var idu = document.querySelector('.fixed-click-element-over.click-element-over').getAttribute('unid')
         var dataArrayClass = ''
      
         if (copyClass.length == 1){
                 dataArrayClass += copyClass[0]
         }else{
             for(var i = 0; i <  copyClass.length; i++) {
                 dataArrayClass += copyClass[i] + ','
             }
             dataArrayClass = dataArrayClass.replace(/,\s*$/, "");
         }
 
         document.getElementById(idu).setAttribute('data-class', dataArrayClass)
        
     }else{
         var id = uuidv1()
         document.querySelector('.click-element-over').setAttribute('unid', id)
  
         document.querySelector('.click-element-over').classList.add('fixed-click-element-over')
         var classUnid = document.createElement('div');
         var idu = id;
         classUnid.className = 'classUnid';
         classUnid.id = id;
         document.querySelector('.selected-class').setAttribute('unid', idu)
        
         document.querySelector('html').appendChild(classUnid)
         var idu = document.querySelector('.fixed-click-element-over.click-element-over').getAttribute('unid')
         for (var i = 0; i < copyClass.length; i++) {
              if (copyClass.length != 0){
                  document.querySelector('.classUnid[id="'+id+'"]').setAttribute('data-class', copyClass[i]);
              }
          }
         
     }
    
     /*var id = uuidv1()
     if (document.querySelector('.selected-class').childNodes.length > 1){
         if (document.querySelector('.click-element-over.fixed-click-element-over') !== null){
             return false;
         }
         var span = document.createElement('span')
         document.querySelector('.click-element-over').classList.add('fixed-click-element-over')
         document.querySelector('.click-element-over').setAttribute('unid', id)
         createClassUnid(id)
     } */
 }
 
 
 
 
 const initTW = () => {
   
    document.querySelector('body').insertAdjacentHTML('beforeend', html)
    ColoresHtml()
 }
 
 if (dev) {
   //initTW()
   const twActive = '<div class="fixed active-inspect cursor-pointer px-2 w-[36px] bg-black rounded  bottom-[36px] right-0"><img class="w-8 h-8" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"></div>'
   document.querySelector('body').insertAdjacentHTML('beforeend', twActive)
 }
 
 
 // Hacemos click en todos los elementos disponibles del DOM para remover el array
 addEvent(document, 'click', '*', function(){
     /*document.querySelector('.selected-class').innerHTML = ''
     if (document.querySelector('.fixed-click-element-over') !== null){
         copyClass = []
      
        
     } */
 })
 
 addEvent(document, 'click', '.click-element-over', function(){
     if (this.className.indexOf('fixed-click-element-over') !== -1){
         var newData = []
         var dataDivid = this.getAttribute('unid')
         var dataDiv = document.querySelector('.classUnid[id="'+dataDivid+'"]').getAttribute('data-class')
         var toSplit = dataDiv.split(',')
    
         for (var i = 0; i < toSplit.length; i++) {
             newData.push(toSplit[i])
         }
         document.querySelector('.selected-class').innerHTML = ''
         document.querySelector('.selected-class').setAttribute('unid', dataDivid)
         
         if (document.getElementById(dataDivid).getAttribute('data-class') == ''){
             return false;
         }
         for (var i = 0; i < newData.length; i++) {
           
             var  selectData = newData[i]
             var span = document.createElement("span");
            
             span.classList.add('selected-item')
             span.classList.add('relative')
             
        
             span.setAttribute('data-class-select', selectData)
             span.innerHTML = selectData + '<span class="absolute cursor-pointer top-2/4 right-1 transform -translate-y-2/4 delete-class"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></span>';
             document.querySelector('.selected-class').appendChild(span) 
         } 
 
         
 
     }else{

         document.querySelector('.selected-class').innerHTML = ''
         copyClass = []
     }
 })
 
 
 
 
 
 
 addEvent(document, 'click', '.active-inspect', function(){
     initTW()
     setTimeout(() => {
         addE()
         hoverElement()
      
         clickElement()
         dragElement(document.getElementById("mydiv"));
         space()
         mainMasterData(resolveConfig(fullConfigTW), dataMaster)
         searchClass(dataMaster)
         //disabledEnabled()
         //toggleAction.activate()
         
      }, 3000)
 })
 
 setTimeout(() => {
     if (dev) {
     initTW()
     }
     addE()
     hoverElement()
   
     clickElement()
     dragElement(document.getElementById("mydiv"));
     space()
     mainMasterData(resolveConfig(fullConfigTW), dataMaster)
     searchClass(dataMaster)
     //disabledEnabled()
     //toggleAction.activate()

     const DOT_AMOUNT = 40;


     
  }, 3000)
 
 
 function showCSS(){
    var element = document.querySelector('.class-row-tw')
 }


var tabMain = document.querySelectorAll('.app-buttons')
addEvent(document, 'click', '.app-buttons', function(){
    
    var tabId = this.getAttribute('data-tab')
    var tabMain = document.querySelectorAll('.app-buttons')
    for (var i = 0; i < tabMain.length; i++) {
        tabMain[i].classList.remove('active')
    }
    this.classList.add('active')

    // data-content-tab
    var tabContent = document.querySelectorAll('.data-content-tab')
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active')
    }
    document.querySelector('.data-content-tab[data-content-tab="'+tabId+'"]').classList.add('active')
  
})
addEvent(document, 'change', '.variant-pciker input', function(){
    prefixColors = this.value
})

var tmpColor = []
addEvent(document, 'click', '.trigger-color-click', function(){
    for (var i = 0; i < tmpColor.length; i++) {
        document.querySelector('.click-element-over').classList.remove(tmpColor[i])
    }
    tmpColor = []
    console.log(tmpColor)
    var dataColor = this.getAttribute('data-color-main')
    setSnackBar(prefixColors + dataColor)
    tmpColor.push(prefixColors + dataColor)
    arrayPrefixColors.push(prefixColors + dataColor)
    document.querySelector('.click-element-over').classList.add(prefixColors + dataColor)
})



//show-element-hover

addEvent(document, 'mouseover', '.trigger-color-click', function(){
    var closestParent = this.closest('.container-wrapper-config-colors-opacity')
    var dataColorMain = this.getAttribute('data-color-main')
    var dataColor = this.getAttribute('data-color')
    if (closestParent.querySelector('.element-cover-color') !== null){
        closestParent.querySelector('.element-cover-color').style.color = dataColor
        closestParent.querySelector('.element-cover-color').innerHTML = dataColorMain
    }else{
        var div = document.createElement('div')
        div.classList.add('element-cover-color')
        div.innerHTML = prefixColors + dataColor
      
        closestParent.querySelector('.show-element-hover').appendChild(div)
    }
})

function setSnackBar(message){
    var container =  document.querySelector('.content-color-app')
    var footerHeight = document.querySelector('.footer-gap-main').offsetHeight
    
    if (container.querySelector('.snackbar') !== null){
        container.querySelector('.snackbar').remove()
    }
    var div = document.createElement('div')
    div.classList.add('snackbar')
    div.classList.add('flex')
    div.classList.add('items-center')
    div.classList.add('truncate')
   
   
    div.innerHTML = '<div class="text-green-500 mr-1">Seleccionado: </div> '+ message
    
    div.classList.add('font-black')
    container.appendChild(div)

    setTimeout(() => {
        div.classList.add('show')
        div.style.bottom = footerHeight + 50 + 'px'
    }, 500);
    setTimeout(() => {
        div.remove()
    }, 3000); 

}


//trigger-color-click but hover



console.log(mainMasterData(resolveConfig(fullConfigTW), dataMaster))









document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
    
        const DOT_AMOUNT = 40;
    
        const createSVG = (width, height, className, childType, childAttributes) => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
        svg.classList.add(className);
    
        const child = document.createElementNS(
            "http://www.w3.org/2000/svg",
            childType
        );
    
        svg.setAttributeNS(
            "http://www.w3.org/2000/svg",
            "viewBox",
            `0 0 ${width} ${height}`
        );
    
        for (const attr in childAttributes) {
            child.setAttribute(attr, childAttributes[attr]);
        }
    
        svg.appendChild(child);
    
        return { svg, child };
        };
    
        document.querySelectorAll(".generate-button").forEach((button) => {
        const width = button.offsetWidth;
        const height = button.offsetHeight;
    
        const style = getComputedStyle(button);
    
        const { svg, child: circle } = createSVG(width, height, "dots", "circle", {
            cx: "0",
            cy: "0",
            r: "0",
        });
    
        const strokeGroup = document.createElement("div");
        strokeGroup.classList.add("stroke");
    
        const { svg: stroke } = createSVG(width, height, "stroke-line", "rect", {
            x: "0",
            y: "0",
            width: "100%",
            height: "100%",
            rx: parseInt(style.borderRadius, 10),
            ry: parseInt(style.borderRadius, 10),
            pathLength: "10",
        });
    
        button.appendChild(svg);
    
        strokeGroup.appendChild(stroke);
        strokeGroup.appendChild(stroke.cloneNode(true));
    
        button.appendChild(strokeGroup);
    
        const timeline = gsap.timeline({ paused: true });
    
        for (var i = 0; i < DOT_AMOUNT; i++) {
            var p = circle.cloneNode(true);
            svg.appendChild(p);
    
            gsap.set(p, {
            attr: {
                cx: gsap.utils.random(width * 0.25, width * 0.75),
                cy: gsap.utils.random(height * 0.5, height * 0.5),
                r: 0,
            },
            });
    
            var durationRandom = gsap.utils.random(10, 12);
    
            var tl = gsap.timeline();
    
            tl.to(
            p,
            {
                duration: durationRandom,
                rotation: i % 2 === 0 ? 200 : -200,
                attr: {
                r: gsap.utils.random(0.75, 1.5),
                cy: -width * gsap.utils.random(1.25, 1.75),
                },
                physics2D: {
                angle: -90,
                gravity: gsap.utils.random(-4, -8),
                velocity: gsap.utils.random(10, 25),
                },
            },
            "-=" + durationRandom / 2
            ).to(
            p,
            {
                duration: durationRandom / 3,
                attr: {
                r: 0,
                },
            },
            "-=" + durationRandom / 4
            );
    
            timeline.add(tl, i / 3);
        }
    
        svg.removeChild(circle);
    
        const finalTimeline = gsap.to(timeline, {
            duration: 10,
            repeat: -1,
            time: timeline.duration(),
            paused: true,
        });
    
        const stars = gsap.to(button, {
            repeat: -1,
            repeatDelay: 0.75,
            paused: true,
            keyframes: [
            {
                "--generate-button-star-2-scale": ".5",
                "--generate-button-star-2-opacity": ".25",
                "--generate-button-star-3-scale": "1.25",
                "--generate-button-star-3-opacity": "1",
                duration: 0.3,
            },
            {
                "--generate-button-star-1-scale": "1.5",
                "--generate-button-star-1-opacity": ".5",
                "--generate-button-star-2-scale": ".5",
                "--generate-button-star-3-scale": "1",
                "--generate-button-star-3-opacity": ".5",
                duration: 0.3,
            },
            {
                "--generate-button-star-1-scale": "1",
                "--generate-button-star-1-opacity": ".25",
                "--generate-button-star-2-scale": "1.15",
                "--generate-button-star-2-opacity": "1",
                duration: 0.3,
            },
            {
                "--generate-button-star-2-scale": "1",
                duration: 0.35,
            },
            ],
        });
    
        button.addEventListener("pointerenter", () => {
            gsap.to(button, {
            "--generate-button-dots-opacity": ".5",
            duration: 0.25,
            onStart: () => {
                finalTimeline.restart().play();
                setTimeout(() => stars.restart().play(), 500);
            },
            });
        });
    
        button.addEventListener("pointerleave", () => {
            gsap.to(button, {
            "--generate-button-dots-opacity": "0",
            "--generate-button-star-1-opacity": ".25",
            "--generate-button-star-1-scale": "1",
            "--generate-button-star-2-opacity": "1",
            "--generate-button-star-2-scale": "1",
            "--generate-button-star-3-opacity": ".5",
            "--generate-button-star-3-scale": "1",
            duration: 0.15,
            onComplete: () => {
                finalTimeline.pause();
                stars.pause();
            },
            });
        });
        });
        
    }, 10000);
});