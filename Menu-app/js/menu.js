var userInfo = {
    id : '1001',
    userName : 'mjones',
    fullName : 'Mary Jones',
    photo : 'users/1001.png',
    role : {
        id : 'SA',
        name : 'System Administrator'
    },
    language : {
        id : 'EN',
        name : 'English'
    },
    theme : 'dark',
    menuOptions : [
        {
            icon : 'home',
            title : {
                EN : 'Home',
                SP : 'Inicio'
            },
            url : 'index.html'
        },
        {
            icon : 'users',
            title : {
                EN : 'Agents',
                SP : 'Agentes'
            },
            url : 'agents.html'
        },
        {
            icon : 'phone',
            title : {
                EN : 'Calls',
                SP : 'Llamadas'
            },
            url : 'calls.html'
        },
        {
            icon : 'chart-bar',
            title : {
                EN : 'Charts',
                SP : 'Gráficas'
            },
            url : 'charts.html'
        },
        {
            icon : 'wrench',
            title : {
                EN : 'Settings',
                SP : 'Configuración'
            },
            url : 'settings.html'
        },
        {
            icon : 'sign-out-alt',
            title : {
                EN : 'Logout',
                SP : 'Cerrar Sesión'
            },
            url : 'logout.html'
        }
    ]
};

//variables
var menuOpen = false;


// menu
function toggleMenu(){
    console.log("Toggle menu...");
    //get content height
    var contentHeight = document.getElementById('content').clientHeight;
    //nav height
    document.getElementById('nav').style.height = contentHeight + 'px';
    //menu closed
    if(!menuOpen)
        document.getElementById('nav').style.display = 'inline';
    else
        document.getElementById('nav').style.display = 'none';
    menuOpen = !menuOpen;
}
function app(){
    this.getInfoUser()
    this.languageMode()
    this.changeBakcground()
}

function changeBakcground() {
    var content = document.getElementById('content')
    var nav = document.getElementById('nav')
    var header = document.getElementById('header')
    var line_top = document.getElementById('line_top')
    var line_middle = document.getElementById('line_middle')
    var line_bottom = document.getElementById('line_bottom')
    var user = document.getElementById('user')
    var icon = document.getElementById('icon')

    if(isDarkMode()){
        content.style.background = '#302845'
        nav.style.background = '#68607F'
        nav.style.color = '#FFFF'
        header.style.background = '#46444A'
        line_top.style.background = '#FFFF'
        line_middle.style.background = '#FFFF'
        line_bottom.style.background = '#FFFF'
        user.style.color = '#FFFF'
        // icon.style.color = '#DDD'
    }
}
function isDarkMode() {
    var theme = false
    if(userInfo.theme === 'light') return theme
    else if(userInfo.theme === 'dark') return theme = true
    else console.log(`${userInfo.theme} no es un theme`)
}

function languageMode(){
    if (userInfo.language.id === 'EN'){
        getIconNameEnglish()
    } else if (userInfo.language.id === 'SP') {
        getIconNameSpanish()
    } else {
        console.log(`ERROR: ${userInfo.language.name} no es un idioma válido`)
    }
}

function getInfoUser(){
    var photo = document.getElementById('photo');
    var name = document.getElementById('name');
    var role = document.getElementById('role');
    photo.innerHTML = `<img src="${userInfo.photo}" class="userphoto" id="photo"/>`
    name.innerHTML = userInfo.fullName;
    role.innerHTML = userInfo.role.name;
}

function getIconNameSpanish(){
    var home = document.getElementById('icon-home');
    var user = document.getElementById('icon-user');
    var phone = document.getElementById('icon-phone');
    var chart = document.getElementById('icon-chart');
    var wrench = document.getElementById('icon-wrench');
    var logout = document.getElementById('icon-logout');

    home.innerHTML = userInfo.menuOptions[0].title.SP;
    user.innerHTML = userInfo.menuOptions[1].title.SP;
    phone.innerHTML = userInfo.menuOptions[2].title.SP;
    chart.innerHTML = userInfo.menuOptions[3].title.SP;
    wrench.innerHTML = userInfo.menuOptions[4].title.SP;
    logout.innerHTML = userInfo.menuOptions[5].title.SP;
}

function getIconNameEnglish(){
    var home = document.getElementById('icon-home');
    var user = document.getElementById('icon-user');
    var phone = document.getElementById('icon-phone');
    var chart = document.getElementById('icon-chart');
    var wrench = document.getElementById('icon-wrench');
    var logout = document.getElementById('icon-logout');
    home.innerHTML = userInfo.menuOptions[0].title.EN;
    user.innerHTML = userInfo.menuOptions[1].title.EN;
    phone.innerHTML = userInfo.menuOptions[2].title.EN;
    chart.innerHTML = userInfo.menuOptions[3].title.EN;
    wrench.innerHTML = userInfo.menuOptions[4].title.EN;
    logout.innerHTML = userInfo.menuOptions[5].title.EN;
    // var labels = document.getElementsByClassName('label-icon');
    // // labels.innerHTML = 'Hola';



    // var testElements = document.getElementsByClassName('label-icon');
    // var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    //     return testElement.nodeName === 'LABEL';
    // });
    // console.log(testDivs);
    
    // for(i= 0; i < userInfo.menuOptions.length; i++){
    //     testDivs.innerHTML = userInfo.menuOptions[i].title.EN;    
    // }
}