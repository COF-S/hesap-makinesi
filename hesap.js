const ekran = document.getElementById('yazi');

/**
 * 
@param {string} deger 
 */
function sayilar(deger) {
    ekran.value += deger;
}


function temizlebutonu() {
    ekran.value = '';
}


function silbutonu() {

    ekran.value = ekran.value.slice(0, -1);
}


function hesaplayıcı() {

    try {
    
        ekran.value = eval(ekran.value);
    } catch (error) {

        ekran.value = 'Hata';
    }

}
