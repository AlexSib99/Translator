function translateNumber(inputNumber) {
    var number = String(inputNumber), translation = '', triplets = [], i, k, n, j;

    for (i = number.length, k = 0; i > 0; i = i -3, k++) {
        n = i - 3;
        if (n < 0) {
            n = 0;
        }
        triplets[k] = number.slice(n, i);
    }
    for (j = triplets.length - 1; j >= 0; j--) {
        if (triplets[j] == 0) {
            continue;
        }
        if (translation === '') {
            translation += translateLargeNumbers(j, triplets[j]);
        } else {
            translation += ' ' + translateLargeNumbers(j, triplets[j]);
        }
    }

    return (translation);
}

function translateThreeDigits(threeDigits) {
    var words, twoDigits, thirdDigit;
    words = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
    'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать',
    'девятнадцать', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто',
    'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    function translateTwoDigits(digits) {
        var firstDigit, secondDigit;
        if (digits < 21) {
            return words[digits - 1];
        } else {
            firstDigit = digits % 10;
            secondDigit = Math.floor(digits / 10);
            if (firstDigit == 0) {
                return words[secondDigit + 17];
            } else {
                return words[secondDigit + 17] + ' ' + words[firstDigit - 1];
                }
        }
    }

    twoDigits = threeDigits % 100;
    thirdDigit = Math.floor(threeDigits / 100);
    if (thirdDigit == 0) {
        return translateTwoDigits(threeDigits);
    } else {
        if (twoDigits == 0) {
            return words[thirdDigit + 26];
        } else {
            return words[thirdDigit + 26] + ' ' + translateTwoDigits(twoDigits);
        }
    }
}

function translateLargeNumbers(tripletsNumber, triplet) {
    var largeNumbers = ['', 'тысяч', 'миллион', 'миллиард', 'триллион', 'квадриллион', 'квинтиллион', 'секстиллион',
    'септиллион', 'октиллион', 'нониллион', 'дециллион', 'ундециллион', 'додециллион', 'тредециллион',
    'кваттуордециллион', 'квиндециллион', 'седециллион', 'септдециллион', 'октодециллион', 'новемдециллион',
    'вигинтиллион', 'анвигинтиллион', 'дуовигинтиллион', 'тревигинтиллион', 'кватторвигинтиллион', 'квинвигинтиллион',
    'сексвигинтиллион', 'септемвигинтиллион', 'октовигинтиллион', 'новемвигинтиллион', 'тригинтиллион',
    'антригинтиллион', 'дуотригинтиллион'];
    var tripletInWords = translateThreeDigits(triplet);
    switch(tripletsNumber) {
        case 0: return tripletInWords;
        case 1:
            if (Math.floor(triplet / 10) % 10 == 1) {
                return tripletInWords + ' ' + largeNumbers[tripletsNumber];
            } else {
                switch(triplet % 10) {
                    case 1: return tripletInWords.slice(0, tripletInWords.length - 2) + 'на' + ' ' + largeNumbers[tripletsNumber] + 'а';
                    case 2: return tripletInWords.slice(0, tripletInWords.length - 1) + 'е' + ' ' + largeNumbers[tripletsNumber] + 'и';
                    case 3: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'и';
                    case 4: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'и';
                    default: return tripletInWords + ' ' + largeNumbers[tripletsNumber];
                }
            }
        default:
            if (Math.floor(triplet / 10) % 10 == 1) {
                return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'ов';
            } else {
                switch(triplet % 10) {
                    case 1: return tripletInWords + ' ' + largeNumbers[tripletsNumber];
                    case 2: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'а';
                    case 3: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'а';
                    case 4: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'а';
                    default: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'ов';
                }
            }
    }
}
