const hardReset = ''
var indexSelect = 0;
export const searchClass = (dataMaster) => {
    var simulateClick = function(elem) {
        // Create our event (with options)
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        // If cancelled, don't dispatch our event
        var canceled = !elem.dispatchEvent(evt);
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



    let suggestions = [
        "Channel",
        "CodingLab",
        "CodingNepal",
        "YouTube",
        "YouTuber",
        "YouTube Channel",
        "Blogger",
        "Bollywood",
        "Vlogger",
        "Vechiles",
        "Facebook",
        "Freelancer",
        "Facebook Page",
        "Designer",
        "Developer",
        "Web Designer",
        "Web Developer",
        "Login Form in HTML & CSS",
        "How to learn HTML & CSS",
        "How to learn JavaScript",
        "How to became Freelancer",
        "How to became Web Designer",
        "How to start Gaming Channel",
        "How to start YouTube Channel",
        "What does HTML stands for?",
        "What does CSS stands for?",
    ];

    function addEvent(parent, evt, selector, handler) {
        parent.addEventListener(evt, function(event) {
            if (event.target.matches(selector + ', ' + selector + ' *')) {
                handler.apply(event.target.closest(selector), arguments);
            }
        }, false);
    }

    // getting all required elements
    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector(".search-input input");
    const suggBox = searchWrapper.querySelector(".autocom-box");
    const icon = searchWrapper.querySelector(".icon");
    let linkTag = searchWrapper.querySelector("a");
    let webLink;

    // if user press any key and release
    inputBox.onkeyup = (e) => {
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
            document.querySelector('.select-item').classList.remove('active');
            document.querySelectorAll('.select-item')[indexSelect].classList.add('active');

            if (indexSelect <= document.querySelectorAll('.select-item').length) {
                indexSelect++;
            } else {

            }
        }

        if (e.keyCode == '38') {

            if (indexSelect == 0) {
                indexSelect = 0;
            } else {
                indexSelect--;
            }

            document.querySelector('.select-item').classList.remove('active');
            document.querySelectorAll('.select-item')[indexSelect].classList.add('active');

        }

    }

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '13') {
         
            var someLink = document.querySelector('.select-item.active')

            simulateClick(someLink);

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