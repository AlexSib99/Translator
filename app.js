var languages = {
    rus: {
        words: [
            ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
            'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать',
            'девятнадцать'],
            ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
            ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
        ],
        largeNumbers: ['', 'тысяч', 'миллион', 'миллиард', 'триллион', 'квадриллион', 'квинтиллион', 'секстиллион',
        'септиллион', 'октиллион', 'нониллион', 'дециллион', 'ундециллион', 'додециллион', 'тредециллион',
        'кваттуордециллион', 'квиндециллион', 'седециллион', 'септдециллион', 'октодециллион', 'новемдециллион',
        'вигинтиллион', 'анвигинтиллион', 'дуовигинтиллион', 'тревигинтиллион', 'кватторвигинтиллион', 'квинвигинтиллион',
        'сексвигинтиллион', 'септемвигинтиллион', 'октовигинтиллион', 'новемвигинтиллион', 'тригинтиллион',
        'антригинтиллион', 'дуотригинтиллион'],

        translateThreeDigitNumber: function(number) {
            var translation = '';

            if (number.length == 3) {
                translation += this.words[2][number[0]];
                number = number.substring(1, 3);

                if (number != 0 && translation !== '') {
                    translation += ' ';
                }
            }

            if (number < 20) {
                translation += this.words[0][Number(number)];
            } else {
                translation += this.words[1][number[0]];

                if (number[1] != 0) {
                    translation += ' ' + this.words[0][number[1]];
                }
            }

            return translation;
        },

        translateLargeNumbers: function(tripletsNumber, triplet) {
            var tripletInWords = this.translateThreeDigitNumber(triplet),
                translation;

            switch(tripletsNumber) {
                case 0:
                    translation = tripletInWords;
                    break;
                case 1:
                    if (Math.floor(triplet / 10) % 10 == 1) {
                        translation = tripletInWords + ' ' + this.largeNumbers[tripletsNumber];
                    } else {
                        switch(triplet % 10) {
                            case 1:
                                translation = tripletInWords.substring(0, tripletInWords.length - 2) + 'на' + ' ' + this.largeNumbers[tripletsNumber] + 'а';
                                break;
                            case 2:
                                translation = tripletInWords.substring(0, tripletInWords.length - 1) + 'е' + ' ' + this.largeNumbers[tripletsNumber] + 'и';
                                break;
                            case 3:
                            case 4:
                                translation = tripletInWords + ' ' + this.largeNumbers[tripletsNumber] + 'и';
                                break;
                            default:
                                translation = tripletInWords + ' ' + this.largeNumbers[tripletsNumber];
                        }
                    }
                    break;
                default:
                    if (Math.floor(triplet / 10) % 10 == 1) {
                        translation = tripletInWords + ' ' + this.largeNumbers[tripletsNumber] + 'ов';
                    } else {
                        switch(triplet % 10) {
                            case 1:
                                translation = tripletInWords + ' ' + this.largeNumbers[tripletsNumber];
                                break;
                            case 2:
                            case 3:
                            case 4:
                                translation = tripletInWords + ' ' + this.largeNumbers[tripletsNumber] + 'а';
                                break;
                            default:
                                translation = tripletInWords + ' ' + this.largeNumbers[tripletsNumber] + 'ов';
                        }
                    }
            }

            return translation;
        }
    },

    eng: {
        words: [
            ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
            'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
            ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        ],
        largeNumbers: ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion',
        'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion',
        'quattuordecillion', 'quinquadecillion', 'sedecillion', 'septendecillion', 'octodecillion', 'novendecillion',
        'vigintillion', 'unvigintillion', 'duovigintillion', 'tresvigintillion', 'quattuorvigintillion',
        'quinquavigintillion', 'sesvigintillion', 'septemvigintillion', 'octovigintillion', 'novemvigintillion',
        'trigintillion', 'untrigintillion', 'duotrigintillion', 'trestrigintillion', 'quattuortrigintillion',
        'quinquatrigintillion', 'sestrigintillion', 'septentrigintillion', 'octotrigintillion', 'noventrigintillion',
        'quadragintillion'],

        translateThreeDigitNumber: function(number) {
            var translation = '';

            if (number.length == 3) {
                translation += this.words[0][number[0]];
                number = number.substring(1, 3);

                if (translation !== '') {
                    translation += ' hundred';
                    if (number != 0) {
                        translation += ' and ';
                    }
                } else {
                    if (number != 0) {
                        translation += 'and ';
                    }
                }
            }

            if (number < 20) {
                translation += this.words[0][Number(number)];
            } else {
                translation += this.words[1][number[0]];

                if (number[1] != 0) {
                    translation += '-' + this.words[0][number[1]];
                }
            }

                return translation;
        },

        translateLargeNumbers: function(tripletsNumber, triplet) {
            var translation = this.translateThreeDigitNumber(triplet);

            if (tripletsNumber > 0) {
                translation += ' ' + this.largeNumbers[tripletsNumber];
            }

            return translation;
        }
    }
};

function translateNumber(inputNumber, lang) {
    var number = String(inputNumber),
        translation = '',
        triplets = [],
        i,
        k,
        n,
        j;

    number = number.replace(/^0+/, '');

    if (!isValid(number) || number.length > languages[lang].largeNumbers.length * 3) {
        return 'Error';
    }

    for (i = number.length, k = 0; i > 0; i = i -3, k++) {
        n = i - 3;
        n = n < 0 ? 0 : n;
        triplets[k] = number.substring(n, i);
    }

    for (j = triplets.length - 1; j >= 0; j--) {
        if (triplets[j] == 0) continue;

        if (translation === '') {
            translation += languages[lang].translateLargeNumbers(j, triplets[j]);
        } else {
            translation += ' ' + languages[lang].translateLargeNumbers(j, triplets[j]);
        }
    }

    return translation;
}

function isValid(number) {
    var pattern = /^\d+$/;

    return pattern.test(number) ? true : false;
}
