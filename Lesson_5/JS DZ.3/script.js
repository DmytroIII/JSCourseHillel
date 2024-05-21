let yearOfBirth = prompt("Якого ви року народження"); 
let liveSity = prompt("В якому місті ви живете");
let kindOfSport = prompt("Улюблений вид спорту"); 

let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;

if (yearOfBirth === null) {
    age = "Шкода що не захотіли вводити дату народження"
}

let message;

if (liveSity === "Київ") {
    message = "Ти живеш у столиці України";
} else if (liveSity === "Вашингтон") {
    message = "Ти живеш у столиці США";
} else if (liveSity === "Лондон") {
    message = "Ти живеш у столиці Великобританії";
} 
else if (liveSity === null) {
    message = "Шкода що не захотіли вводити місто в якому живете";
}
else {
    message = `Ти живеш у місті ${liveSity}`;
}

let sportLeader;

if (kindOfSport === "Баскетбол") {
    sportLeader = "Круто! Хочеш стати Джорданом?";
} else if (kindOfSport === "Футбол") {
    sportLeader = "Круто! Хочеш стати Роналду?";
} else if (kindOfSport === "Формула-1") {
    sportLeader = "Круто! Хочеш стати Хемілтоном?";
} 
 else if (kindOfSport === null) {
    sportLeader = "Шкода що не захотіли вводити улюблений вид спорту";
}
else {
    sportLeader = ``;
}

alert("Ваш вік: " + age + " " + message + " " + sportLeader);