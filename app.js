function translateNumber(number) {
  var words, digit1, digit2;
  
  words = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
   'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать',
   'семнадцать', 'восемнадцать', 'девятнадцать', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто', 'сто'];


  if (number < 21) {
    return words[number - 1];
  } else {
    digit1 = number % 10;
    digit2 = Math.floor(number / 10);
    if (digit1 === 0) {
      return words[digit2 + 17];
    } else {
      return words[digit2 + 17] + " " + words[digit1 - 1];
    }
  }
}

console.log(translateNumber(1));