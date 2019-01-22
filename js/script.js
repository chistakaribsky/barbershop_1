var link = document.querySelector('.login-link');

var popup = document.querySelector('.modal-login');

var close = document.querySelector('.modal-close');

var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');

var form = popup.querySelector('form');

var isStorageSupport = true;
var storage = '';

try
    {
        storage = localStorage.getItem('login');
    }
catch (err)
    {
        isStorageSupport = false;
    }

link.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.add('modal-show');

    if (storage)
        {
            login.value = storage;
            password.focus();
        }
    else
        {
            login.focus();
        }
});

close.addEventListener('click', function(evt){
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
});

window.addEventListener('keydown', function(evt)
{
    if(evt.keyCode===27)
        {
            evt.preventDefault();
            if(popup.classList.contains('modal-show'))
                {
                    popup.classList.remove('modal-show');
                    popup.classList.remove('modal-error');
                }
        }
});

form.addEventListener('submit', function(evt)
    {
        if(!login.value||!password.value)
            {
                evt.preventDefault();
                popup.classList.remove('modal-error');
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add('modal-error');
            }
        else
            {
                if(isStorageSupport)
                        {
                            localStorage.setItem('login',login.value);
                        }
            }
    });

var mapLink = document.querySelector('.contacts-button-map');
var mapLinkFooter = document.querySelector('.contacts-link-map');

var mapPopUp = document.querySelector('.modal-map');

var mapClose = mapPopUp.querySelector('.modal-close');

mapLink.addEventListener('click', function(evt){
    evt.preventDefault();
        mapPopUp.classList.add('modal-show');
    });

mapLinkFooter.addEventListener('click', function(evt){
    evt.preventDefault();
        mapPopUp.classList.add('modal-show');
    });

mapClose.addEventListener('click', function(evt){
    evt.preventDefault();
    mapPopUp.classList.remove('modal-show');

});

window.addEventListener('keydown', function(evt)
{
    if(evt.keyCode===27)
        {
            evt.preventDefault();
            if(mapPopUp.classList.contains('modal-show'))
                {
                    mapPopUp.classList.remove('modal-show');
                }
        }
});