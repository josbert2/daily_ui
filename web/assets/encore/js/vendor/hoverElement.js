export const  hoverElement = (en) => {
 
        var element = document.querySelector('*');
        element.addEventListener('mouseover', function(event) {
           if (event.target.closest('.content-app-tw') !== null) {
              return false
           }
           event.target.classList.add('hover-element-over')
        });
        element.addEventListener("mouseout", function(event) {
           if (event.target.closest('.content-app-tw') !== null) {
              return false
           }
           event.target.classList.remove('hover-element-over')
        })
     
        var event = new MouseEvent('mouseover', {
           'view': window,
           'bubbles': true,
           'cancelable': true
        });
     
        element.dispatchEvent(event);

}