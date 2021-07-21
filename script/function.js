//genera un numero random tra un minimo e il massimo
/**
 * controlla che un dato elemento sia presente in un array
 * @param{*}needle
 * @param{*}haystack
 * @returns{bolean}
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



/**
 * controlla che un dato elemento sia un numero
 * @param{number}min
 * @param{number}max
 * @returns{number}
 */

function getUserNumnber(min, max) {
    var number;
    do {
        number = prompt('inserisci un numero da ' + min + 'a' + max);
    } while (!isNumber(number) || number < min || number > max);

    return parseInt(number);
}

/**
 * controlla che un dato elemento sia presente in un array
 * @param{string}num
 * @param{string}num
 * @returns{bolean}
 */
function isNumber(num) {
    if (!num || num.trim() === '' || isNaN(num)) {
        return false;
    } else {
        return true;
    }
}