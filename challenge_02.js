/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */

// Eingabe + Deklaration + string zur number
const name1 = prompt("Wie lautet Ihr Name?");
let age =parseInt(prompt("Wie als sind Sie?"));

switch (true) {
    case age <= 6:
        console.log(name1, "trinkt Milch.");
        break;
    case age <= 13:
        console.log(name1, "trinkt Saft.");
        break;
    case age <= 17:
        console.log(name1, "trinkt Cola.");
        break;
    case age >= 18:
        console.log(name1, "trinkt Wein.");
        break;

    default:
        console.log(name1, "leider keine Drinks")
        break;
}