document.querySelectorAll('input[type="name"]').forEach(name => {
    name.addEventListener('keyup', function (event) {
        if (checkBorder(name.value, true)) {
            name.style.borderColor = "rgba(163, 156, 170, 0.4)";
        } else {
            name.style.borderColor = "red";
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(tel => {
    tel.addEventListener('keyup', function (event) {
        if (checkBorder(tel.value.replace(/[^0-9]/g, ""), false)) {
            tel.style.borderColor = "rgba(163, 156, 170, 0.4)";
        } else {
            tel.style.borderColor = "red";
        }
    });
});


var form_name_modal = document.getElementById('FormInputName2')
var form_tel_modal = document.getElementById('FormInputTel2')



document.querySelector('#defaultModal').addEventListener('hidden.bs.modal', () => {
    form_name_modal.value = '';
    form_name_modal.style.borderColor = "rgba(163, 156, 170, 0.4)";
    form_tel_modal.value = '';
    form_tel_modal.style.borderColor = "rgba(163, 156, 170, 0.4)";
});


var priceModal = document.getElementById('priceModal')

if (priceModal) {
    priceModal.addEventListener('show.bs.modal', event => {
        var button = event.relatedTarget
        var size = button.getAttribute('data-title')
        var desc = button.getAttribute('data-desc')
        var img = button.getAttribute('data-img')
        var price = button.querySelector('.price').textContent

        priceModal.querySelector('img').setAttribute('src', img)
        priceModal.querySelector('.main-btn').setAttribute('data-price', price)
        priceModal.querySelector('.main-btn').setAttribute('data-size', size)
        priceModal.querySelector('.title span').textContent = size
        priceModal.querySelector('.desc').textContent = desc
    })
}
var addonModal = document.getElementById('addonModal')

if (addonModal) {
    addonModal.addEventListener('show.bs.modal', event => {
        var button = event.relatedTarget
        var title = button.getAttribute('data-title')
        var desc = button.getAttribute('data-desc')
        var img = button.getAttribute('data-img')

        addonModal.querySelector('img').setAttribute('src', img)
        addonModal.querySelector('.title').textContent = title
        addonModal.querySelector('.desc').textContent = desc
    })
}
var defaultModal = document.getElementById('defaultModal')

if (defaultModal) {
    defaultModal.addEventListener('show.bs.modal', event => {
        var button = event.relatedTarget

        var size = button.getAttribute('data-size')
        var price = button.getAttribute('data-price')

        defaultModal.querySelector('h2 span').textContent = size
        defaultModal.querySelector('.main-btn').setAttribute('data-endsize', size)
        defaultModal.querySelector('.main-btn').setAttribute('data-endprice', price)
    })
}
// document.querySelectorAll('.openDialog').forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelector('#reqModal').showModal();
//     });
// });
// document.querySelector('.closeDialog').addEventListener('click', () => {
//     document.querySelector('#reqModal').close();
// });

function form_submit(e, formid) {
    e.preventDefault();
    var form_name, form_tel, form_price, form_size;
    if (formid == 'form1') {
        form_name = document.getElementById('FormInputName1').value;
        form_tel = document.getElementById('FormInputTel1').value
        console.log(form_name, form_tel);
        // if (check(form_name, true) && check(form_tel.replace(/[^0-9]/g, ""), false)) {
        //     form = new FormData();
        //     xhr = new XMLHttpRequest();
        //     form.append('form_name', form_name);
        //     form.append('form_tel', form_tel);

        //     xhr.open('POST', 'form-handler.php');
        //     xhr.send(form);
        //     xhr.onreadystatechange = function () {
        //         if (xhr.readyState != 4) return;

        //         if (xhr.status === 200) {
        //             window.location.href = 'https://deykun-marketing.ru/thanks.html';
        //         }
        //     }
        // }
    } else if (formid == 'form2') {
        form_name = document.getElementById('FormInputName2').value;
        form_tel = document.getElementById('FormInputTel2').value;
        form_price = document.getElementById('form2').querySelector('.main-btn').getAttribute('data-endprice')
        form_size = document.getElementById('form2').querySelector('.main-btn').getAttribute('data-endsize')
        console.log(form_name, form_tel, form_price, form_size);
        
        // if (check(form_name, true) && check(form_tel.replace(/[^0-9]/g, ""), false)) {
        //     form = new FormData();
        //     xhr = new XMLHttpRequest();
        //     form.append('form_name', form_name);
        //     form.append('form_endprice', form_price);
        //     form.append('form_endsize', form_size);
        //     form.append('form_tel', form_tel);

        //     xhr.open('POST', 'form-handler.php');
        //     xhr.send(form);
        //     xhr.onreadystatechange = function () {
        //         if (xhr.readyState != 4) return;

        //         if (xhr.status === 200) {
        //             window.location.href = 'https://deykun-marketing.ru/thanks.html';
        //         }
        //     }
        // }
    }


}

function check(value, condition) {
    var result = false;
    if (condition) {
        var name_reg = /^([А-я])+(( +([А-я])+$)|$)/g;
        if (value.match(name_reg)) {
            result = true;
        }
    } else {
        var tel_reg = /^(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/g;
        if (value.match(tel_reg)) {
            result = true;
        }
    }
    return result;
}

function checkBorder(value, condition) {
    var result = false;
    if (condition) {
        var name_reg = /^([А-я])+(( +([А-я])+$)|$)/g;
        if (value != '') {
            if (value.match(name_reg)) {
                result = true;
            }
        } else {
            result = true;
        }
    } else {
        var tel_reg = /^(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/g;
        if (value != '') {
            if (value.match(tel_reg)) {
                result = true;
            }
        } else {
            result = true;
        }
    }
    return result;
}

// $('body').activity({
//     'achieveTime':60
//     ,'testPeriod':10
//     ,useMultiMode: 1
//     ,callBack: function (e) {
//         ga('send', 'event', 'Activity', '60_sec');
//         yaCounterXXXXXXXXX.reachGoal('60_sec');
//     }
// });