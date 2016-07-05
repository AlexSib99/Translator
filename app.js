function translateNumber(number) {
    var words, digits12, digit3;
    words = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
    'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать',
    'девятнадцать', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто',
    'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    function translateTwoDigits(digits) {
        var digit1, digit2;
        if (digits < 21) {
            return words[digits - 1];
        } else {
            digit1 = digits % 10;
            digit2 = Math.floor(digits / 10);
            if (digit1 === 0) {
                return words[digit2 + 17];
            } else {
                return words[digit2 + 17] + " " + words[digit1 - 1];
                }
        }  
    }

    digits12 = number % 100;
    digit3 = Math.floor(number / 100);
    if (digit3 === 0) {
        return translateTwoDigits(number);
    } else {
        if (digits12 === 0) {
            return words[digit3 + 26];
        } else {
            return words[digit3 + 26] + " " + translateTwoDigits(digits12);
        }
    }
}
