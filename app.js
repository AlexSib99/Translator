var words = [
        ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
        'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать',
        'девятнадцать'],
        ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
    ],
    largeNumbers = ['', 'тысяч', 'миллион', 'миллиард', 'триллион', 'квадриллион', 'квинтиллион', 'секстиллион',
    'септиллион', 'октиллион', 'нониллион', 'дециллион', 'ундециллион', 'додециллион', 'тредециллион',
    'кваттуордециллион', 'квиндециллион', 'седециллион', 'септдециллион', 'октодециллион', 'новемдециллион',
    'вигинтиллион', 'анвигинтиллион', 'дуовигинтиллион', 'тревигинтиллион', 'кватторвигинтиллион', 'квинвигинтиллион',
    'сексвигинтиллион', 'септемвигинтиллион', 'октовигинтиллион', 'новемвигинтиллион', 'тригинтиллион',
    'антригинтиллион', 'дуотригинтиллион'];

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
        triplets[k] = number.substring(n, i);
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

function translateThreeDigitNumber(number) {
    var translation = '';

        if (number.length == 3) {
            translation += words[2][number[0]];
            number = number.substring(1, 3);

            if (number != 0 && translation !== '') {
                translation += ' ';
            }
        }

        if (number < 20) {
            translation += words[0][Number(number)];
        } else {
            translation += words[1][number[0]];

            if (number[1] != 0) {
                translation += ' ' + words[0][number[1]];
            }
        }

        return translation;
}

function translateLargeNumbers(tripletsNumber, triplet) {
    var tripletInWords = translateThreeDigitNumber(triplet),
    translation;

    switch(tripletsNumber) {
        case 0:
            translation = tripletInWords;
            break;
        case 1:
            if (Math.floor(triplet / 10) % 10 == 1) {
                translation = tripletInWords + ' ' + largeNumbers[tripletsNumber];
            } else {
                switch(triplet % 10) {
                    case 1:
                        translation = tripletInWords.substring(0, tripletInWords.length - 2) + 'на' + ' ' + largeNumbers[tripletsNumber] + 'а';
                        break;
                    case 2:
                        translation = tripletInWords.substring(0, tripletInWords.length - 1) + 'е' + ' ' + largeNumbers[tripletsNumber] + 'и';
                        break;
                    case 3:
                    case 4:
                        translation = tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'и';
                        break;
                    default:
                        translation = tripletInWords + ' ' + largeNumbers[tripletsNumber];
                }
            }
            break;
        default:
            if (Math.floor(triplet / 10) % 10 == 1) {
                translation = tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'ов';
            } else {
                switch(triplet % 10) {
                    case 1:
                        translation = tripletInWords + ' ' + largeNumbers[tripletsNumber];
                        break;
                    case 2:
                    case 3:
                    case 4:
                        translation = tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'а';
                        break;
                    default:
                        translation = tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'ов';
                }
            }
    }

    return translation;
}
