alert ("Willkommenzum Lavalampen Rechner!");

let Answer1 = prompt("Bitte suche aus, ob du die Mengenangaben für das Wachs, oder Mengenangaben für die Start-Flüssigkeit oder die Größe der Glühbirne, und ob du eine Heizspirale berechnen möchtest:\n\n (1)   Mengenangeaben für Wachs\n\n (2)   Mengenangaben für Startflüssigkeit\n\n (3)   Größe der Glühbirne & mit oder ohne Heizspirale \n\nBitte 1, 2 oder 3eingeben und mit ENTER bestätigen:"
);

if (Answer1 == "1" || Answer1 == "01" || Answer1 == "eins" || Answer1 == "Eins" || Answer1 == "EINS" || Answer1 == "one" || Answer1 == "One" || Answer1 == "ONE") {
    alert("Du hast die Mengenangaben für das Wachs ausgewählt.")

    let Gesamtmenge = 0;
    let ParafinWachsAnteil = 11/24;
    let Parafinwachs = 0;
    let MicrocristallinesWachsAnteil = 1/24;
    let MicrocristallinesWachs = 0;
    let ParafinölAnteil = 2/24;
    let Parafinöl = 0;
    let BremsscheibenReinigerAnteil = 10/24;
    let BremsscheibenReiniger = 0;

    let Answer2 = prompt("Weißt du bereits wie viel Lampenwachs du insgesammt herstellen möchtest\n\n (1)   Ja\n\n (2)   Nein\n\nBitte 1 oder 2 eingeben und mit ENTER bestätigen:");
    if (Answer2 == "1" || Answer2 == "01" || Answer2 == "ja" || Answer2 == "Ja" || Answer2 == "JA" || Answer2 == "yes" || Answer2 == "Yes" || Answer2 == "YES") {
        
        Gesamtmenge = prompt("Gib die Menge an Lampenwachs in Gramm ein, die du herstellen möchtest:")

        alert("Du möchtest also insgesamt " + Gesamtmenge + " Gramm Lampenwachs herstellen.\n\nHier siehst du die Mengenangaben der einzelnen Zutaten:\n\n 1. Parafinwachs: " + (Gesamtmenge * (ParafinWachsAnteil)).toFixed(1) + " Gramm\n 2. Mikrocristallines Wachs: " + (Gesamtmenge * (MicrocristallinesWachsAnteil)).toFixed(1) + " Gramm\n 3. Parafinöl: " + (Gesamtmenge * (ParafinölAnteil)).toFixed(1) + " Gramm\n 4. Bremsscheibenreiniger: " + (Gesamtmenge * (BremsscheibenReinigerAnteil)).toFixed(1) + " Gramm\n\nDenk bitte daran dich an die Sicherheitsvorkehrungen beim Herstellen von Lavalampe zu halten, damit du noch viele weitere Lampen reparieren und herstellen kannst!\n\nViel Spaß beim Herstellen deiner Lavalampe!\nZum Neuberechnen lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...")
    
    }else if (Answer2 == "2" || Answer2 == "02" || Answer2 == "nein" || Answer2 == "Nein" || Answer2 == "NEIN" || Answer2 == "no" || Answer2 == "No" || Answer2 == "NO") {

        let Zutat = prompt ("Kein Problem! Dann überlege dir bitte von der Menge welcher Zutat ausgehend, du die Mengenangaben berechnen lassen möchtest:\n\n (1)   Parafinwachs: " + (ParafinWachsAnteil * 100).toFixed(2) + "%" + "\n\n (2)   Mikrocristallines Wachs: " + (MicrocristallinesWachsAnteil * 100).toFixed(2) + "%" + "\n\n (3)   Parafinöl: " + (ParafinölAnteil * 100).toFixed(2) + "%" + "\n\n (4)   Bremsscheibenreiniger: " + (BremsscheibenReinigerAnteil * 100).toFixed(2) + "%\n\nBitte 1, 2, 3 oder 4 eingeben und mit ENTER die Eingabe bestätigen:")
        if (Zutat == "1" || Zutat == "01" || Zutat == "eins" || Zutat == "Eins" || Zutat == "EINS" || Zutat == "one" || Zutat == "One" || Zutat == "ONE") {
            let Parafinwachs = prompt("Du hast Parafinwachs ausgewählt. Gib die Menge an Parafinwachs in Gramm ein, die du verwenden möchtest:\n\n")
            alert("Wenn du " + Parafinwachs + "Gramm Parafinwachs zur Herrstellung von Lampenwachs verwenden möchtest,\nerhältest du eine Gesammtmenge von ca." + (Gesamtmenge = (Parafinwachs / ParafinWachsAnteil)) + "Gramm Lampenwachs. \n\nFür diese Menge benötigst du noch folgende Zutaten:\n\n 1. Parafinwachs:   " + (Gesamtmenge * (ParafinWachsAnteil)).toFixed(1) + " Gramm\n 2. Mikrocristallines Wachs:   " + (Gesamtmenge * (MicrocristallinesWachsAnteil)).toFixed(1) + " Gramm\n 3. Parafinöl: " + (Gesamtmenge * (ParafinölAnteil)).toFixed(1) + " Gramm\n 4. Bremsscheibenreiniger: " + (Gesamtmenge * (BremsscheibenReinigerAnteil)).toFixed(1) + " Gramm\n\nDenk bitte daran dich an die Sicherheitsvorkehrungen beim Herstellen von Lavalampe zu halten, damit du noch viele weitere Lampen reparieren und herstellen kannst!\nViel Spaß beim Herstellen deiner Lavalampe!\n\nZum Neuberechnen lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...");
        } else if (Zutat == "2" || Zutat == "02" || Zutat == "zwei" || Zutat == "Zwei" || Zutat == "ZWEI" || Zutat == "two" || Zutat == "Two" || Zutat == "TWO") {
            let MicrocristallinesWachs = prompt("Du hast mikrocristallines Wachs ausgewählt. Gib die Menge an mikrocristallinem Wachs in Gramm ein, die du verwenden möchtest:\n\n")
            alert("Wenn du " + MicrocristallinesWachs + "Gramm mikrocristallines Wachs zur Herrstellung von Lampenwachs verwenden möchtest,\nerhältest du eine Gesammtmenge von ca." + (Gesamtmenge = (MicrocristallinesWachs / MicrocristallinesWachsAnteil)) + "Gramm Lampenwachs. \n\nFür diese Menge benötigst du noch folgende Zutaten:\n\n 1. Parafinwachs:   " + (Gesamtmenge * (ParafinWachsAnteil)).toFixed(1) + " Gramm\n 2. Mikrocristallines Wachs:   " + (Gesamtmenge * (MicrocristallinesWachsAnteil)).toFixed(1) + " Gramm\n 3. Parafinöl: " + (Gesamtmenge * (ParafinölAnteil)).toFixed(1) + " Gramm\n 4. Bremsscheibenreiniger: " + (Gesamtmenge * (BremsscheibenReinigerAnteil)).toFixed(1) + " Gramm\n\nDenk bitte daran dich an die Sicherheitsvorkehrungen beim Herstellen von Lavalampe zu halten, damit du noch viele weitere Lampen reparieren und herstellen kannst!\nViel Spaß beim Herstellen deiner Lavalampe!\n\nZum Neuberechnen lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...");
        } else if (Zutat == "3" || Zutat == "03" || Zutat == "drei" || Zutat == "Drei" || Zutat == "DREI" || Zutat == "three" || Zutat == "Three" || Zutat == "THREE") {
            let Parafinöl = prompt("Du hast Parafinöl ausgewählt. Gib die Menge an Parafinöl in Gramm ein, die du verwenden möchtest:\n\n")
            alert("Wenn du " + Parafinöl + "Gramm Parafinöl zur Herrstellung von Lampenwachs verwenden möchtest,\nerhältest du eine Gesammtmenge von ca." + (Gesamtmenge = (Parafinöl / ParafinölAnteil)) + "Gramm Lampenwachs. \n\nFür diese Menge benötigst du noch folgende Zutaten:\n\n 1. Parafinwachs:   " + (Gesamtmenge * (ParafinWachsAnteil)).toFixed(1) + " Gramm\n 2. Mikrocristallines Wachs:   " + (Gesamtmenge * (MicrocristallinesWachsAnteil)).toFixed(1) + " Gramm\n 3. Parafinöl:   " + (Gesamtmenge * (ParafinölAnteil)).toFixed(1) + " Gramm\n 4. Bremsscheibenreiniger:   " + (Gesamtmenge * (BremsscheibenReinigerAnteil)).toFixed(1) + " Gramm\n\nDenk bitte daran dich an die Sicherheitsvorkehrungen beim Herstellen von Lavalampe zu halten, damit du noch viele weitere Lampen reparieren und herstellen kannst!\nViel Spaß beim Herstellen deiner Lavalampe!\n\nZum Neuberechnen lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...");
        } else if (Zutat == "4" || Zutat == "04" || Zutat == "vier" || Zutat == "Vier" || Zutat == "VIER" || Zutat == "four" || Zutat == "Four" || Zutat == "FOUR") {
            let BremsscheibenReiniger = prompt("Du hast Bremsscheibenreiniger ausgewählt. Gib die Menge an Bremsscheibenreiniger in Gramm ein, die du verwenden möchtest:\n\n")
            alert("Wenn du " + BremsscheibenReiniger + "Gramm Bremsscheibenreiniger zur Herrstellung von Lampenwachs verwenden möchtest,\nerhältest du eine Gesammtmenge von ca." + (Gesamtmenge = (BremsscheibenReiniger / BremsscheibenReinigerAnteil)) + "Gramm Lampenwachs. \n\nFür diese Menge benötigst du noch folgende Zutaten:\n\n 1. Parafinwachs:   " + (Gesamtmenge * (ParafinWachsAnteil)).toFixed(1) + " Gramm\n 2. Mikrocristallines Wachs:   " + (Gesamtmenge * (MicrocristallinesWachsAnteil)).toFixed(1) + " Gramm\n 3. Parafinöl:   " + (Gesamtmenge * (ParafinölAnteil)).toFixed(1) + " Gramm\n 4. Bremsscheibenreiniger:   " + (Gesamtmenge * (BremsscheibenReinigerAnteil)).toFixed(1) + " Gramm\n\nDenk bitte daran dich an die Sicherheitsvorkehrungen beim Herstellen von Lavalampe zu halten, damit du noch viele weitere Lampen reparieren und herstellen kannst!\nViel Spaß beim Herstellen deiner Lavalampe!\n\nZum Neuberechnen lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...");
        } else {
            alert("Ungültige Eingabe. Bitte lade die Seite neu und versuche es erneut.")
        }
    } else {
        alert("Ungültige Eingabe. Bitte lade die Seite neu und versuche es erneut.")
    }


} else if (Answer1 == "2" || Answer1 == "02" || Answer1 == "zwei" || Answer1 == "Zwei" || Answer1 == "ZWEI" || Answer1 == "two" || Answer1 == "Two" || Answer1 == "TWO") {
    
    alert("Du hast die Mengenangaben für die Start-Flüssigkeit ausgewählt.")

    let Flüssigkeit_Gesamtmenge = 0;
    let DestWasserAnteil = 1/2;
    let DestWasser = 0;
    let SurfactantAnteil = 1/2;
    let Surfactant = 0;

    let Answer3 = prompt("Weißt du bereits wie viel Start-Flüssigkeit du insgesammt herstellen möchtest\n\n (1)   Ja\n\n (2)   Nein\n\nBitte 1 oder 2 eingeben und mit ENTER bestätigen:");
    if (Answer3 == "1" || Answer3 == "01" || Answer3 == "ja" || Answer3 == "Ja" || Answer3 == "JA" || Answer3 == "yes" || Answer3 == "Yes" || Answer3 == "YES") {
        
        Flüssigkeit_Gesamtmenge = prompt("Gib die Menge an Start-Flüssigkeit in Millilitern ein, die du insgesammt herstellen möchtest:")

        alert("Du möchtest also insgesamt " + Flüssigkeit_Gesamtmenge + " Milliliter Flüssigkeit herstellen.\n\nHier siehst du die Mengenangaben der einzelnen Zutaten:\n\n 1. Destilliertes Wasser: " + (Flüssigkeit_Gesamtmenge * (DestWasserAnteil)).toFixed(1) + " ml\n 2. Surfactant: " + (Flüssigkeit_Gesamtmenge * (SurfactantAnteil)).toFixed(1) + " ml\n\nViel Spaß beim Herstellen deiner Lavalampe!\nZum Neuberechnen lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...")
    
    } else if (Answer3 == "2" || Answer3 == "02" || Answer3 == "nein" || Answer3 == "Nein" || Answer3 == "NEIN" || Answer3 == "no" || Answer3 == "No" || Answer3 == "NO") {

        let Zutat2 = prompt ("Kein Problem! Dann überlege dir bitte von der Menge welcher Zutat ausgehend, du die Mengenangaben berechnen lassen möchtest:\n\n (1)   Destilliertes Wasser: " + (DestWasserAnteil * 100).toFixed(2) + "%" + "\n\n (2)   Surfactant: " + (SurfactantAnteil * 100).toFixed(2) + "%" + "\n\nBitte 1 oder 2 eingeben und mit ENTER die Eingabe bestätigen:")
        if (Zutat2 == "1" || Zutat2 == "01" || Zutat2 == "eins" || Zutat2 == "Eins" || Zutat2 == "EINS" || Zutat2 == "one" || Zutat2 == "One" || Zutat2 == "ONE") {
            let DestWasser = prompt("Du hast destilliertes Wasser ausgewählt. Gib die Menge an destilliertem Wasser in Millilitern ein, die du verwenden möchtest:\n\n")
            alert("Wenn du " + DestWasser + "Milliliter destilliertes Wasser zur Herrstellung von Flüssigkeit verwenden möchtest,\nerhältest du eine Gesammtmenge von ca." + (Flüssigkeit_Gesamtmenge = (DestWasser / DestWasserAnteil)) + "Milliliter Flüssigkeit. \n\nFür diese Menge benötigst du noch folgende Zutaten:\n\n 1. Destilliertes Wasser:   " + (Flüssigkeit_Gesamtmenge * (DestWasserAnteil)).toFixed(1) + " ml\n 2. Surfactant:   " + (Flüssigkeit_Gesamtmenge * (SurfactantAnteil)).toFixed(1) + " ml\n\nHierbei handelt es sich lediglich um die Menge an Flüssigkeit, die zum Benetzen der Flaschen-Innenwand und Auffangen des Lampenwachses im unteren Bereich der Flasche benötigt wird. der rest der Flasche wird mit destilliertem Wasser aufgefüllt und abschließend mit kleinen Mengen einems Gycerin-Gemisches versehen.\n\nViel Spaß beim Herstellen deiner Lavalampe!\n\nZum Neuberechnen lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...");
        } else if (Zutat2 == "2" || Zutat2 == "02" || Zutat2 == "zwei" || Zutat2 == "Zwei" || Zutat2 == "ZWEI" || Zutat2 == "two" || Zutat2 == "Two" || Zutat2 == "TWO") {
            let Surfactant = prompt("Du hast Surfactant ausgewählt. Gib die Menge an Surfactant in Millilitern ein, die du verwenden möchtest:\n\n")
            alert("Wenn du " + Surfactant + "Milliliter Surfactant zur Herrstellung von Flüssigkeit verwenden möchtest,\nerhältest du eine Gesammtmenge von ca." + (Flüssigkeit_Gesamtmenge = (Surfactant / SurfactantAnteil)) + "Milliliter Flüssigkeit. \n\nFür diese Menge benötigst du noch folgende Zutaten:\n\n 1. Destilliertes Wasser:   " + (Flüssigkeit_Gesamtmenge * (DestWasserAnteil)).toFixed(1) + " ml\n 2. Surfactant:   " + (Flüssigkeit_Gesamtmenge * (SurfactantAnteil)).toFixed(1) + " ml\n\nHierbei handelt es sich lediglich um die Menge an Flüssigkeit, die zum Benetzen der Flaschen-Innenwand und Auffangen des Lampenwachses im unteren Bereich der Flasche benötigt wird. der rest der Flasche wird mit destilliertem Wasser aufgefüllt und abschließend mit kleinen Mengen einems Gycerin-Gemisches versehen.\n\nViel Spaß beim Herstellen deiner Lavalampe!\n\nZum Neuberechnen lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...");
        } else {
            alert("Ungültige Eingabe. Bitte lade die Seite neu und versuche es erneut.")
        }
    } else {
        alert("Ungültige Eingabe. Bitte lade die Seite neu und versuche es erneut.")
    }


} else if (Answer1 == "3" || Answer1 == "03" || Answer1 == "drei" || Answer1 == "Drei" || Answer1 == "DREI" || Answer1 == "three" || Answer1 == "Three" || Answer1 == "THREE") {
    alert("Du hast das bestimmen der Glühbirnen-Größe ausgewählt.\nDu erfährst hier auch, ob du eine Heizspirale benötigst oder nicht.")

    let FlaschenGröße = prompt("Bitte gib an, wie viel Gesammt-Flüssigkeit deine Lavalampen-Flasche in Millilitern fasst (z.B. 500ml, 1000ml etc.):");
    
    if (FlaschenGröße > 0 && FlaschenGröße < 750) {
        alert("Deine Flasche fasst also " + FlaschenGröße + " Milliliter Flüssigkeit.\n\nFür deine Flasche dieser Größe benötigst du eine kleine Glühbirne mit dem E14 Sockel (z.B. 25W oder 40W). \nDu benötigst nicht wirklich eine Heizspirale, sie kann jedoch eine besonder breite oder hohe Flasche schneller aufheizen.\n\nViel Spaß beim Herstellen deiner Lavalampe!\n\nZum Neuberechnen, lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...");
    } else if (FlaschenGröße >= 750 && FlaschenGröße <= 1000) {
        alert("Deine Flasche fasst also " + FlaschenGröße + " Milliliter Flüssigkeit.\n\nFür deine Flasche dieser Größe benötigst du eine große Glühbirne mit dem E27 Sockel (z.B. 25W oder 40W). \nDu benötigst nicht unbedingt eine Heizspirale, sie kann jedoch die Flasche schneller aufheizen.\n\nViel Spaß beim Herstellen deiner Lavalampe!\n\nZum Neuberechnen, lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...");
    } else if (FlaschenGröße > 1000) {
        alert("Deine Flasche fasst also " + FlaschenGröße + " Milliliter Flüssigkeit.\n\nFür deine Flasche dieser Größe benötigst du eine große Glühbirne mit dem E27 Sockel (z.B. 40W oder 60W). \nDu solltest auf jeden Fall eine Heizspirale verwenden, da die größere Menge an Flüssigkeit und Wachs sonst nur sehr langsam in Bewegung kommt.\n\nViel Spaß beim Herstellen deiner Lavalampe!\n\nZum Neuberechnen, lade die Seite bitte neu\nmit ENTER kannst du das Programm beenden ...");
    } else {
        alert("Ungültige Eingabe. Bitte lade die Seite neu und versuche es erneut.")
    }
} else {
    alert("Ungültige Eingabe. Bitte lade die Seite neu und versuche es erneut.")
}