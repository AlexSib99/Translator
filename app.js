function translateNumber(inputNumber) {
    var number = String(inputNumber),
        translation = '',
        triplets = [],
        i,
        k,
        n,
        j;

    for (i = number.length, k = 0; i > 0; i = i -3, k++) {
        n = i - 3;
        n = n < 0 ? 0 : n;
        triplets[k] = number.slice(n, i);
    }

    for (j = triplets.length - 1; j >= 0; j--) {
        if (triplets[j] == 0) continue;

        if (translation === '') {
            translation += translateLargeNumbers(j, triplets[j]);
        } else {
            translation += ' ' + translateLargeNumbers(j, triplets[j]);
        }
    }

    return translation;
}

function translateThreeDigits(digits) {
    var words = [
            ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
            'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать',
            'девятнадцать'],
            ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
            ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
        ],
        result = '';

        if (digits.length == 3) {
            result += words[2][digits[0]];
            digits = digits.slice(1, 3);

            if (digits != 0 && result !== '') {
                result += ' ';
            }
        }

        if (digits < 20) {
            result += words[0][Number(digits)];
        } else {
            result += words[1][digits[0]];

            if (digits[1] != 0) {
                result += ' ' + words[0][digits[1]];
            }
        }

        return result;
}

function translateLargeNumbers(tripletsNumber, triplet) {
    var largeNumbers = ['', 'тысяч', 'миллион', 'миллиард', 'триллион', 'квадриллион', 'квинтиллион', 'секстиллион',
        'септиллион', 'октиллион', 'нониллион', 'дециллион', 'ундециллион', 'додециллион', 'тредециллион',
        'кваттуордециллион', 'квиндециллион', 'седециллион', 'септдециллион', 'октодециллион', 'новемдециллион',
        'вигинтиллион', 'анвигинтиллион', 'дуовигинтиллион', 'тревигинтиллион', 'кватторвигинтиллион', 'квинвигинтиллион',
        'сексвигинтиллион', 'септемвигинтиллион', 'октовигинтиллион', 'новемвигинтиллион', 'тригинтиллион',
        'антригинтиллион', 'дуотригинтиллион'],
        tripletInWords = translateThreeDigits(triplet);

    switch(tripletsNumber) {
        case 0:
            return tripletInWords;
        case 1:
            if (Math.floor(triplet / 10) % 10 == 1) {
                return tripletInWords + ' ' + largeNumbers[tripletsNumber];
            } else {
                switch(triplet % 10) {
                    case 1:
                        return tripletInWords.slice(0, tripletInWords.length - 2) + 'на' + ' ' + largeNumbers[tripletsNumber] + 'а';
                    case 2:
                        return tripletInWords.slice(0, tripletInWords.length - 1) + 'е' + ' ' + largeNumbers[tripletsNumber] + 'и';
                    case 3:
                    case 4:
                        return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'и';
                    default:
                        return tripletInWords + ' ' + largeNumbers[tripletsNumber];
                }
            }
        default:
            if (Math.floor(triplet / 10) % 10 == 1) {
                return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'ов';
            } else {
                switch(triplet % 10) {
                    case 1:
                        return tripletInWords + ' ' + largeNumbers[tripletsNumber];
                    case 2:
                    case 3:
                    case 4:
                        return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'а';
                    default:
                        return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'ов';
                }
            }
    }
}
