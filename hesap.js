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
        // eval() fonksiyonu, metin olarak yazılmış bir JavaScript kodunu çalıştırır.
        // Burada, '5*2+1' gibi bir metni hesaplamak için kullanıyoruz.
        // Not: eval() sadece güvenilir kaynaklardan gelen kodlar için kullanılmalıdır.
        // Bu basit hesap makinesi için güvenlidir.
        ekran.value = eval(ekran.value);
    } catch (error) {

        ekran.value = 'Hata';
    }
}