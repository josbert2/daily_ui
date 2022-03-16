export const  addE = () => {
    function addEvent(parent, evt, selector, handler) {
        parent.addEventListener(evt, function(event) {
          if (event.target.matches(selector + ', ' + selector + ' *')) {
            handler.apply(event.target.closest(selector), arguments);
          }
        }, false);
      }
     
     
     
     
      /* To be used as */
      addEvent(document, 'click', '.tab-tw-inspect-btn', function(e) {
        var id = this.getAttribute('data-id')
        document.querySelectorAll('.tab-tw-inspect-content').forEach(function(element) {
            element.classList.remove('open')
        })
        document.querySelectorAll('.tab-tw-inspect-btn').forEach(function(element) {
           element.classList.remove('active-tab-selector')
        })
     
        document.querySelector('.tab-tw-inspect-btn[data-id="' + id + '"]').classList.add('active-tab-selector')
        document.querySelector('.tab-tw-inspect-content[data-id="' + id + '"]').classList.add('open')
      });
     
      addEvent(document, 'click', '.delete-row', function(e) {
     
      });
      addEvent(document, 'click', '.delete-class-element', function(e) {
        var css =  e.target.closest('.delete-row').querySelector('.class-css').innerHTML
      
        console.log(e.target.closest('.delete-row').remove())
        document.querySelector('.click-element-over').classList.remove(css)
      });
 }