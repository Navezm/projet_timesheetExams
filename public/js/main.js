let cours = [];
let jourDispo = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let coursRandom = [];
let coursRentre;
let random;
let tabRandom = [];
let coursChoisi;
let jourChoisi;
let jourFinal;
let condition = 0;

while (cours.length != 7) {
    coursRentre = prompt("Donne moi les cours que tu as envie de taffer");
    cours.push(coursRentre);
};

let randomAssignement = () => {
    random = Math.floor(Math.random() * jourDispo.length);
    coursChoisi = cours[random];
    cours.splice(random, 1);
    jourChoisi = jourDispo[random];
    jourDispo.splice(random, 1);
    return jourFinal = (`${coursChoisi} que tu étudieras : ${jourChoisi}
    `);
};

do {
    randomAssignement();
    tabRandom.push(jourFinal);
    if(tabRandom.length >= 7){
        condition = 7;
    }
} while (condition < 7);

alert(tabRandom);