function translateNumber(number) {
    var translation = '';
    var largeNumbers = ['', 'тысяч', 'миллион', 'миллиард', 'триллион', 'квадриллион', 'квинтиллион', 'секстиллион',
    'септиллион', 'октиллион', 'нониллион', 'дециллион'];
    var triplets = [];
    var i;
    var j;

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
                if (firstDigit === 0) {
                    return words[secondDigit + 17];
                } else {
                    return words[secondDigit + 17] + ' ' + words[firstDigit - 1];
                    }
            }  
        }

        twoDigits = threeDigits % 100;
        thirdDigit = Math.floor(threeDigits / 100);
        if (thirdDigit === 0) {
            return translateTwoDigits(threeDigits);
        } else {
            if (twoDigits === 0) {
                return words[thirdDigit + 26];
            } else {
                return words[thirdDigit + 26] + ' ' + translateTwoDigits(twoDigits);
            }
        }
    }
    
    function translateLargeNumbers(tripletsNumber) {
        var tripletInWords = translateThreeDigits(triplets[tripletsNumber]);
        switch(tripletsNumber) {
            case 0: return tripletInWords;
            case 1:
                if (Math.floor(triplets[tripletsNumber] / 10) % 10 == 1) {
                    return tripletInWords + ' ' + largeNumbers[tripletsNumber];
                } else {
                    switch(triplets[tripletsNumber] % 10) {
                        case 1: return tripletInWords.slice(0, tripletInWords.length - 2) + 'на' + ' ' + largeNumbers[tripletsNumber] + 'а';
                        case 2: return tripletInWords.slice(0, tripletInWords.length - 1) + 'е' + ' ' + largeNumbers[tripletsNumber] + 'и';
                        case 3: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'и';
                        case 4: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'и';
                        default: return tripletInWords + ' ' + largeNumbers[tripletsNumber];
                    }
                }
            default:
                if (Math.floor(triplets[tripletsNumber] / 10) % 10 == 1) {
                    return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'ов';
                } else {
                    switch(triplets[tripletsNumber] % 10) {
                        case 1: return tripletInWords + ' ' + largeNumbers[tripletsNumber];
                        case 2: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'а';
                        case 3: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'а';
                        case 4: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'а';
                        default: return tripletInWords + ' ' + largeNumbers[tripletsNumber] + 'ов';
                    }
                }
        }
    }

    for (i = 0; i < largeNumbers.length; i++) {
        triplets[i] = Math.floor(number / Math.pow(1000, i)) % 1000;
    }
    for (j = largeNumbers.length - 1; j >= 0; j--) {
        if (triplets[j] === 0) {
            continue;
        }
        if (translation === '') {
            translation += translateLargeNumbers(j);
        } else {
            translation += ' ' + translateLargeNumbers(j);
        }
    }

    return (translation);
}
