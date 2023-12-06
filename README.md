 # Leistungsnachweis IM5: Clownfish Rrecognition 
 
 # Ausgangslage & Projektidee 
Im Rahmen des Moduls "Interaktive Medien 5" war es erforderlich, ein thematisch passendes Webprojekt zu entwickeln, das sich in das Umfeld meines Bachelorprojekts einfügt. Anfangs war mir noch nicht klar, welches Thema ich im nächsten Semester für mein Lehrprojekt wählen würde, aber mein Interesse am Tauchen stand bereits fest. Da zu Beginn noch keine konkrete Themenauswahl getroffen war, entschied ich mich dafür, eine Webseite zur Identifizierung verschiedener Arten von Clownfischen zu erstellen. Diese Idee entsprang meiner Leidenschaft für die Unterwasserwelt.

Das primäre Ziel dieses Projekts war es, eine funktionierende Website zu schaffen, die mindestens zwei Arten von Clownfischen – oft als "Nemos" bezeichnet – unterscheiden kann. Dies war eine spannende Herausforderung, da es mehr als 200 verschiedene Clownfischarten gibt, und ich wollte eine Plattform bieten, die sowohl informativ als auch benutzerfreundlich ist.

Erst in der ersten Dezemberwoche kristallisierte sich heraus, dass meine Bachelorarbeit sich auf die Erstellung einer Werbekampagne mit Spatial Audio konzentrieren würde. Dies führte zu einem Redesign des Projekts. Ich gestaltete die Startseite neu, um den Nutzern ein immersives Erlebnis mit Spatial Audio zu bieten und so eine Brücke zu meinem Bachelorprojekt zu schlagen.

# Vorgehensweise
Zu Beginn meines Projekts stand ich vor der Aufgabe, die Grundlagen der Bilderkennung (Image Recognition) zu erlernen. Nach einiger Recherche entschied ich mich für die Nutzung von "Teachable Machine", einer Plattform, die es ermöglicht, eigene Bilderkennungsmodelle online zu erstellen. Mit Teachable Machine gelang es mir, ein funktionstüchtiges Modell zu entwickeln, das mir eine API zur Verfügung stellte. Diese API integrierte ich gemäss der Anleitung von Teachable Machine in meinen Code.

Für den Bilderkennungsprozess verwendete ich anfänglich je fünf Bilder von zwei Clownfischarten – Ocellaris und Melanopus – um das System zu trainieren. Nachdem der maschinelle Lernprozess erfolgreich implementiert war, widmete ich mich der Erstellung einer Datenbank unter Verwendung von SQL und PHP. Diese Datenbank enthielt zunächst eine Tabelle für diese beiden Fischarten mit Spalten für ID, Beschreibung, Namen und URLs für Bilder.

Nachdem alle Funktionen integriert waren, konzentrierte ich mich auf das Layout der Webseite. Es war mir wichtig, dass das Design sowohl für mich als auch für die Nutzer klar und einfach zu bedienen ist. Dies bedeutete ein schlichtes Layout mit einer begrenzten Anzahl an Buttons, welches ich zunächst als Wireframe auf Papier skizzierte. In der abschliessenden Phase passte ich die Webseite an mobile Endgeräte an.

Mit dem Wechsel meines Bachelorprojektthemas gestaltete ich ein neues Layout, das derzeit jedoch nur auf der Willkommensseite zu sehen ist.

# Challenges
In meinem Projekt traten zwei Hauptprobleme auf: das Gestalten eines responsiven Layouts mit CSS und Fehler im JavaScript-Code für die Bubble-Effekte auf der Willkommensseite.

Die Umsetzung eines responsiven Designs erwies sich als besonders knifflig, da es eine genaue Anpassung an verschiedene Bildschirmgrössen erforderte. Dieser Prozess verbesserte mein Verständnis und meine Fähigkeiten in CSS erheblich.

Beim JavaScript-Code für die Bubbles stiess ich auf ein Problem, bei dem der Code in einer Schleife steckenblieb, was zu Fehlfunktionen führte. Die Behebung dieses Fehlers war eine lehrreiche Erfahrung im Debugging und in der JavaScript-Programmierung.
Überraschenderweise verlief der Bereich des maschinellen Lernens ohne grössere Schwierigkeiten, was meine Erwartungen übertraf.

# Learnings
Das Projekt hat mir gezeigt, wie wichtig es ist, das Design frühzeitig und durchdacht zu planen. Ein Redesign der Willkommensseite mit Figma offenbarte, dass der Einsatz von Design-Tools wie Adobe XD oder Figma von Beginn an für alle Seiten hilfreich gewesen wäre, insbesondere für den CSS-Layoutprozess. Außerdem wäre es effizienter, zuerst die mobile Version zu gestalten und dann die Desktop-Version anzupassen.

Ein aktuelles Problem ist das Design des neuen Layouts, bei dem nicht sofort ersichtlich ist, dass eine Interaktion mit der Maus möglich ist. Dies macht den Bubble-Effekt weniger sichtbar und kann verwirrend sein. Ich habe erkannt, dass CSS komplexer ist, als ich zunächst annahm, insbesondere beim effektiven Layouten eines Designs.

*Wireframe
## Inhaltsverzeichnis
1. [Startseite (Index)](#startseite-index)
2. [Hauptseite (Main)](#hauptseite-main)
3. [Artenliste (Species List)](#artenliste-species-list)
4. [Galerie (Gallery)](#galerie-gallery)

## Startseite (Index)
### Willkommen bei Clownfish Recognition
- **Feature:** Spatial Audio-Effekt auf der Startseite für ein immersives Erlebnis.
- **Navigation:**
  - [Clownfish erkennen](#hauptseite-main)

## Hauptseite (Main)
### Clownfish-Erkennung
- **Anleitung:** Wie Nutzer ein Bild für die Erkennung hochladen können.
- **Funktionalität:**
  - Option zum Hochladen eines Bildes.
- **Ergebnisanzeige:**
  - Identifikation der Art (Ocellaris oder Melanopus) mit zusätzlichen Informationen.

## Artenliste (Species List)
### Clownfish-Artenliste
- **Beschreibung:** Liste aller Arten von Clownfischen aus der Datenbank.
- **Inhalte pro Art:**
  - Name
  - Kurze Beschreibung
  - Bild

## About
### Clownfish-Galerie
- **Überblick:**  Bildern aus der Datenbank.




# Sources  & code snippets 

1) KI 
    - ChatGPT 
    - Github Copilot 
    - Figma 
 
 2) Audio 
    - https://developer.chrome.com/blog/autoplay/#webaudio 
    - https://howlerjs.com/

 3) Machine Learning
    - https://experiments.withgoogle.com/
    - https://teachablemachine.withgoogle.com/

4) Code Snippets & Help 
    - https://stackoverflow.com
    - https://www.freecodecamp.org/news
    - https://codesandbox.io
    - https://www.figma.com

    

 
 
 

