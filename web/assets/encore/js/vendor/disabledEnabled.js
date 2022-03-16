export const toggleAction = {
    activate: function() {
 
       function lockPage()
       {
         lockElements(document.getElementsByTagName("a"));
         lockElements(document.getElementsByTagName("input"));
         lockElements(document.getElementsByTagName("button"));
       };
   
       function lockElements(el)
       {
         for (var i=0; i<el.length; i++)
         {
           el[i].style.pointerEvents="none";
         }
       };
               
       lockPage();
       
       // ...
   },
   deactivate: function() {
 
    // ...
 
    function unlockPage() {
        unlockElements(document.getElementsByTagName("a"));
        unlockElements(document.getElementsByTagName("input"));
        unlockElements(document.getElementsByTagName("button"));
    };
 
    function unlockElements(el)
    {
      for (var i=0; i<el.length; i++)
      {
        el[i].style.pointerEvents="auto";
      }
    };
 
    unlockPage();
    
   },
 }