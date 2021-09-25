let phrases = [
  "Звучит наплохо",
  "Да, это определенно надо сделать",
  "Не думаю, что это хорошая идея",
  "Может, не сегодня?",
  "Компьютер говорит: нет!",
]; // массив ответов
while (true) {
  let str = prompt("Спросите гадалку");
  let random = Math.floor(Math.random() * phrases.length);
  alert(phrases[random]);
  let next = prompt("Гадать еще?:");
  if (next == "нет") {
    alert("До свидания!");
    break;
  }
}
